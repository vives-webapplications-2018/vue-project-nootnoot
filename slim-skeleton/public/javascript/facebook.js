
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
var response = new Vue (
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn: '...',
        signedRequest: '...',
        userID: '...'
    }
})