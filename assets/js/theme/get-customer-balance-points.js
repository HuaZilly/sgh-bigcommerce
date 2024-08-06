export default function (jsContext, maxRewardBearTokenUrl, bearOptions) {

    let apiAccountClientId = jsContext.apiAccountClientId,
        customerPointsApi = jsContext.customerPointsApi,
        enabledTestMode = jsContext.enabledTestMode,
        b2bApi = jsContext.b2bApi,
        testModeToken = $('#test_mode_token');

    let options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    console.log('44');
    console.log(bearOptions)

    let resource = '/customer/current.jwt?app_client_id=' + apiAccountClientId;

    return fetch(resource,options)
        .then(jwt => jwt.json())
        .then(jwt => {
            console.log(jwt); // JWT here

            let authToken = jwt.token,
                encodedPayload = authToken.split('.')[1],
                decodedPayload = JSON.parse(atob(encodedPayload));

            console.log('Decoded JWT Payload:', decodedPayload);

            // Example usage: Access decoded properties
            let customerId = decodedPayload.customer.id,
                storeHash = decodedPayload.store_hash,
                customerGroupId = enabledTestMode ? testModeToken.attr('data-group-id') : decodedPayload.customer.group_id;

            const settings = {
                async: true,
                crossDomain: true,
                method: 'GET',
                headers: {
                    Accept: 'application/json, 200-Response-IncludeExtraFields, 200-Standard Response',
                    authToken: enabledTestMode ? testModeToken.val() : authToken
                }
            };


            fetch(b2bApi + customerGroupId, settings)
                .then(response => response.json())
                .then(response => {

                    // Get company information
                    let data = response.data[0],
                        extraField = data.extraFields[0],
                        customerCode = extraField.fieldValue;

                    if (customerCode.length > 0) {
                        console.log(customerCode)
                        fetch(maxRewardBearTokenUrl, bearOptions)
                            .then(bearResponse => bearResponse.json())
                            .then(bearResponse => {
                                // Get Bear Token

                                console.log(bearResponse)
                                if (bearResponse.token) {
                                    return {
                                        "customer_code": customerCode,
                                        "token": bearResponse.token
                                    }
                                }
                                return '';

                            })
                            .then(data => {
                                console.log(data)
                                if (data.token) {
                                    let getBalanceOptions = {
                                        method: "GET",
                                        headers: {
                                            "Authorization": "Bearer " + data.token
                                        }
                                    };
                                    console.log(getBalanceOptions)
                                    fetch(customerPointsApi + data.customer_code, getBalanceOptions)
                                        .then(response => response.json())
                                        .then(response => {
                                            console.log(response)
                                        });
                                }
                            })
                    }
                })
        });
}