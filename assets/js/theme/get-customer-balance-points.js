export default function (jsContext, maxRewardBearTokenUrl, bearOptions) {

    let apiAccountClientId = jsContext.apiAccountClientId,
        customerPointsApi = jsContext.customerPointsApi,
        b2bAuthToken     = jsContext.b2bAuthToken1 + jsContext.b2bAuthToken2 + jsContext.b2bAuthToken3 + jsContext.b2bAuthToken4 + jsContext.b2bAuthToken5,
        balancePointsSelector = $('.balance-message');

    let options = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    let resource = '/customer/current.jwt?app_client_id=' + apiAccountClientId;

    return fetch(resource,options)
        .then(jwt => jwt.json())
        .then(jwt => {

            let jwtToken = jwt.token,
                encodedPayload = jwtToken.split('.')[1],
                decodedPayload = JSON.parse(atob(encodedPayload));

            let customerGroupId = decodedPayload.customer.group_id,
                currentBalanceText = balancePointsSelector.html();
            balancePointsSelector.html(currentBalanceText.replace(/%1/g, jsContext.customer.name));

            const settings = {
                async: true,
                crossDomain: true,
                method: 'GET',
                headers: {
                    Accept: 'application/json, 200-Response-IncludeExtraFields, 200-Standard Response',
                    authToken: b2bAuthToken
                }
            };


            fetch('https://api-b2b.bigcommerce.com/api/v3/io/companies?isIncludeExtraFields=1&bcGroupId=' + customerGroupId, settings)
                .then(response => response.json())
                .then(response => {
                    console.log(response)

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

                                if (bearResponse.token) {
                                    return {
                                        "customer_code": customerCode,
                                        "token": bearResponse.token
                                    }
                                }
                                return '';

                            })
                            .then(data => {
                                if (data.token) {
                                    let getBalanceOptions = {
                                        method: "GET",
                                        headers: {
                                            "Authorization": "Bearer " + data.token
                                        }
                                    };

                                    fetch(customerPointsApi + data.customer_code, getBalanceOptions)
                                        .then(response => response.json())
                                        .then(response => {
                                            if (!isNaN(response.pointsBalance)) {
                                                let currentBalanceText = balancePointsSelector.html();
                                                balancePointsSelector.html(currentBalanceText.replace(/%2/g, response.pointsBalance));
                                                balancePointsSelector.closest('.balance-points-banner').css('display', 'block');
                                            }
                                        });
                                }
                            })
                    }
                })
        });
}
