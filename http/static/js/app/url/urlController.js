var UrlController = app.controller("UrlController", function($scope, $log, urls) {
	$log.log("Url controller");
	$scope.urls = urls;
	
});

UrlController.resolve = {
		urls: function(UrlService, $log) {
			return UrlService.query();
		}
};