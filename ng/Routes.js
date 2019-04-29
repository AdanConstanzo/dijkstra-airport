angular.module('app')
    .config(function ($routeProvider) {
        // my routes... makes life easy
        $routeProvider
            .when('/',{controller: 'AirportCtrl',templateUrl:'/templates/home.html'})
    });
