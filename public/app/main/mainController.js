app.controller('mainController', ["$scope", "userService", "firebaseService", "$firebaseObject", function($scope, user, firebase, $firebaseObject) {
    $scope.user = user;
    $scope.messages = $firebaseObject(firebase.child('messages'));
    $scope.postMessage = function() {

        var message = {
            text: $('#message').val(),
            author: user.name
        };

        firebase.child('messages').push(message);
    }
}]);