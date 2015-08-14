app.service('authService', ["firebaseService", function(firebase) {

    return {
        signIn: function(provider) {
            firebase.authWithOAuthPopup(provider, function() {});
        },
        signOut: function() {
            firebase.unauth();
        },
        isSigned: function() {
            return !!firebase.getAuth();
        }
    }
}]);