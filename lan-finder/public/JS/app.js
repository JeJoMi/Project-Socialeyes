const app = angular.module('lan-finder', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('landing', {
        url:'/',
        templateUrl:'../views/landing.html'
    })
    .state('home', {
        url:'/home',
        templateUrl:'../views/home.html'
    })
}])
