const app = angular.module('lan-finder', ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('landing', {
        url:'/',
        templateUrl:'../views/landing.html',
        controller: 'mainCtrl'
    })
    .state('home', {
        url:'/home',
        templateUrl:'../views/home.html'
    })
    .state('events',{
        url:'/events',
        templateUrl:'../views/events.html'
    })
    .state('about',{
        url:'/about',
        templateUrl:'../views/about.html'
    })
    .state('edit_profile',{
        url:'/edit_profile',
        templateUrl:'../views/editProfile.html',
        controller:'userController'
    })
}])
