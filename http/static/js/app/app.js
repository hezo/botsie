var app = angular.module('app', [ 'mgcrea.ngStrap', 'ngResource', 'ngRoute', 'ngAnimate' ]);

app.config(function($routeProvider, $httpProvider, $locationProvider) {
	$routeProvider.when('/', {
		controller : "MainController",
		templateUrl : 'views/',
	}).when('/url', {
		controller : "UrlController",
		templateUrl : 'views/url/list.html',
		resolve: UrlController.resolve
	}).otherwise({
		redirectTo : '/'
	});
});

var MainController = app.controller("MainController", function($scope, $log) {
	$log.log("Main Controller");
})