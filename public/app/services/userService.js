app.service('userService', ["firebaseService", "$firebaseObject", function(firebase, firebaseObject) {

    var userData = {
        name: firebase.getAuth().twitter.displayName,
        avatar: firebase.getAuth().twitter.profileImageURL
    };

    var userRef = firebase.child('users').child(firebase.getAuth().uid);
    userRef.transaction(function(currentUserData) {
        if (currentUserData === null) {
            userRef.set(userData);
        }
    });

    return firebaseObject(userRef);
}]);