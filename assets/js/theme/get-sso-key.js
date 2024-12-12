import Encrypt from "crypto-js/enc-hex";
import hmacSHA384 from "crypto-js/hmac-sha384";

export default  function (jsContext, maxRewardBearTokenUrl, bearOptions) {

    let maxRewardKey = jsContext.secretKey,
        maxRewardBaseUrl = jsContext.maxRewardBaseUrl,
        maxRewardGenerateSsoKeyAPI = maxRewardBaseUrl + jsContext.generateSsoKeyAPI,
        maxRewardMenuLink = jsContext.maxRewardsMenuLink,
        maxRewardLink = $('.max-reward-link a');

    $('.max-reward-link').removeClass('.non-logged-in');

    if (maxRewardLink.length > 0 && jsContext.customer !== null) {
        window.addEventListener('load', generateSsoKey);
    }
    else {
        maxRewardLink.on('click', function (e) {
            e.preventDefault();
        })
    }

    Number.prototype.padLeft = function(base, chr){
        let  len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0')+this : this;
    }

    function calculateDate() {
        let theDate = new Date;

        return (theDate.getUTCDate()).padLeft() + '-'
            + (theDate.getUTCMonth() + 1).padLeft() + '-'
            + theDate.getUTCFullYear() + '-'
            + (theDate.getUTCHours()).padLeft() + '-'
            + (theDate.getUTCMinutes()).padLeft() + '-'
            + (theDate.getUTCSeconds()).padLeft();
    }

    function generateSsoKey() {
        fetch(maxRewardBearTokenUrl, bearOptions)
            .then(response => response.json())
            .then(response => {
                // Get Bear Token
                return response.token ?? '';

            })
            .then(token => {
                let customerEmail = jsContext.customer.email;
                if (!token) {
                    console.error('Token generate failed please check your token again');
                    return;
                }
                if (!customerEmail) {
                    console.error('No email found');
                    return;
                }

                //Generate hmacSHA384 token

                let timeStamp = calculateDate(),
                    hmacDigest = Encrypt.stringify(hmacSHA384(customerEmail + timeStamp, maxRewardKey));

                return {
                    token,
                    hmacDigest,
                    customerEmail,
                    timeStamp
                }

            }).then(response => {
            if (response.hmacDigest) {

                console.log('has digest sha384');

                let bearToken = "Bearer " + response.token,
                    authParams = {
                        "authParams": {
                            "username": response.customerEmail,
                            "timestamp": response.timeStamp,
                            "digest": response.hmacDigest
                        }
                    };

                let options = {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': bearToken
                    },
                    body: JSON.stringify(authParams)
                };

                fetch(maxRewardGenerateSsoKeyAPI, options)
                    .then(response => response.json())
                    .then(response => {
                        if (response.message === 'Success') {
                            $('.max-reward-link').css('pointer-events', 'auto');
                            maxRewardLink.attr('target', '_blank');
                            maxRewardLink.attr('href', maxRewardMenuLink.replace('ssovalue', response.data.ssokey));
                            console.log('SSO key generated')

                            // Add link to top banner
                            let topBannerLink = `<a href="${maxRewardMenuLink.replace('ssovalue', response.data.ssokey)}" target="_blank" alt="Max Rewards Link"> Click here to redeem. </a>`;
                            $(topBannerLink).appendTo('.balance-message');
                        }
                    });
            } else {
                console.error('No digest hmac key');
            }
        }).catch(error => {
            console.error(error)
        })
    }

}
