var app = angular.module('app', ['ngRoute', 'firebase']);

// Check if the user is logged, then redirect him to the login page
app.run(["$rootScope", "$location", "authService", function ($rootScope, $location, auth) {
    $rootScope.$on("$routeChangeStart", function () {
        if(!auth.isSigned()) {
            $location.path("/sign-in");
        }
    });
}]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "mainController",
            templateUrl: "app/main/main.html"
        })
        .when("/sign-in", {
            controller: "signInController",
            templateUrl: "app/sign-in/sign-in.html"
        })
        .otherwise({ redirectTo: "/" });
}]);
