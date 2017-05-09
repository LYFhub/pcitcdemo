angular.module('mainApp',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl: 'views/main.html'})
    .when('/scopemanagement',{templateUrl: 'views/scopemanagement.html'})
    .when('/scope',{templateUrl: 'views/scope.html'})
    .otherwise({redirectTo:'/'});
}]);