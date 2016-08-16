congApp.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/dashboard");
    $stateProvider
        .state("dashboard", {
            url: "/dashboard",
            templateUrl: "/app/dashboard/dashboard.html",
            data: { pageTitle: "dashboard" },
            controller: "app.dashboard",
            resolve: {
                deps: [
                    "$ocLazyLoad",
                    function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: "CongApp",
                            serie: true,
                            insertBefore: "#ng_load_plugins_before",
                            files: [
                                "/app/dashboard/dashboard.js",
                                "/app/services/topicservice.js",
                            ]
                        });
                    }
                ]
            }
        })
}]);