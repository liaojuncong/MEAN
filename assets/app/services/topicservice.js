angular.module(appName).factory('TopicService', ['$http', '$rootScope', function ($http, $rootScope) {
	var _service = {
		result: [],
		list: function (type, queryParam) {
			$http.get("/api/topics").success(function (res) {
				_service.result = res;
				$rootScope.$broadcast('topic.list');
			});
		}
	};

	return _service;
}]);