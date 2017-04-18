const app = angular.module('lan-finder', ['ui.router'])

<<<<<<< HEAD
// app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
//     $urlRouterProvider.otherwise('/')
//
//     $stateProvider
//     .state('landing', {
//         url:'/',
//         templateUrl:'/views/landing/landingTmpl.html'
//     })
// }])
=======
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')

    $stateProvider
    .state('landing', {
        url:'/',
        templateUrl:'../views/landing.html'
    })
}])
>>>>>>> 2663cf7043118b0a6fef166b8a69333ae38a1463
