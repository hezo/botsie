"use strict";
var app = angular.module('admin', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller:MainCtrl, templateUrl:'views/main.html'}).
			otherwise({redirectTo:'/'});
	});
	
angular.module('crypt', []).factory('base64', function() {
    return {

        name: 'Base64',
        readonly: false,

        encode: function(input) {
            return window.btoa(input);
        },

        decode: function(input) {
            return window.atob(input);
        }

    };
});
	
function MainCtrl($scope, $http) {
	$scope.login = {};
	$scope.login.user = null;
	$scope.base64 = angular.injector(['crypt']).get('base64');
	
	$scope.login.connect = function() {
		$http.get('/bot/').success(function(data, status) {
			if (status < 200 || status >= 300)
				return;
		$scope.login.user = "admin";
		});
   	};
    $scope.login.disconnect = function() {
       	$scope.login.user = null;
   	};
    $scope.$watch('login.login + login.password', function() {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $scope.base64.encode($scope.login.login + ':' + $scope.login.password);
    });
}