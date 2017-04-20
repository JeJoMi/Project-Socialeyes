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
        templateUrl:'../views/home.html',
        controller:'userController'
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
    .state('messages', {
        url:'/messages',
        templateUrl:'../views/messages.html'
    })
    .state('message',{
        url:'/message/:id',
        templateUrl:'../views/message.html'
    })
    .state('user_photos',{
        url:'/user_photos',
        templateUrl:'../views/userPhotos.html'
    })
}])
