app.controller('signInController', ["$scope", "authService", function($scope, auth) {
    $scope.title = "Veuillez vous connecter";
    $scope.signIn = function() {
        auth.signIn('twitter');
    },
    $scope.signOut = function() {
        auth.signOut();
    }
}]);