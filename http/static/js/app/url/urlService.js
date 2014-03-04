app.factory('UrlService', function($resource) {
	return $resource('/url/:param', {}, {
		query: {method:'GET', params:{param:'all'}, isArray:true}
	})
});