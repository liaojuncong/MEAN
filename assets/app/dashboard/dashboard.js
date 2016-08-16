var appName = "CongApp";
angular.module(appName).controller("app.dashboard", ["$rootScope", "$scope", "TopicService", function ($rootScope, $scope, TopicService) {

    TopicService.list();

    $scope.$on('topic.list', function () {
        $scope.list = TopicService.result;
    });
}]);