"use strict";

var app = angular.module('url', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller:MainCtrl, templateUrl:'list.html'}).
			otherwise({redirectTo:'/'});
	});
	function MainCtrl($scope, $http) {
		$http.get("/url/all").success(function(data){
			$scope.urls = data;
		});
	}