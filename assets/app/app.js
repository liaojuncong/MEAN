var congApp = angular.module("CongApp", ["ui.router", 'ngAnimate', "oc.lazyLoad"]);
var appName = "CongApp";

congApp
.config(["$ocLazyLoadProvider", "$controllerProvider", "$httpProvider", function ($ocLazyLoadProvider, $controllerProvider, $httpProvider) {
        $ocLazyLoadProvider.config({});
        $controllerProvider.allowGlobals();
        $httpProvider.interceptors.push('httpInterceptor');
    }])
    .factory("httpInterceptor", ["$q", "$rootScope", function ($q, $rootScope) {
        return {
            request: function (config) {
                // do something on request success
                if (!(config.url.endsWith('.html') || config.url.endsWith('.js') || config.url.endsWith('.css'))) {
                    
                }
                return config || $q.when(config);
            },
            requestError: function (rejection) {
                // do something on request error
                return $q.reject(rejection);
            },
            response: function (response) {
                // do something on response success
                if (!(response.config.url.endsWith('.html') || response.config.url.endsWith('.js') || response.config.url.endsWith('.css'))) {
                    console.log("请求成功");
                }
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                // do something on response error
                if (!(rejection.config.url.endsWith('.html') || rejection.config.url.endsWith('.html') || rejection.config.url.endsWith('.js') && rejection.config.url.endsWith('.css'))) {
                    console.log("请求失败");
                }
                return $q.reject(rejection);
            }
        };
    }])
    .run(["$rootScope", "$state", function ($rootScope, $state) {
        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from;
            $rootScope.previousParams = fromParams;
            $rootScope.goback = function () {
                window.history.go(-1);
            };
            $rootScope.openDropdown = function () {
                $(this).addClass()
            };
            
        });
        $rootScope.$state = $state; // state to be accessed from view
    }])
    // .animation('.fad', function () {
    //     return {
    //         enter: function (element, done) {
    //             element.css({
    //                 opacity: 0
    //             });
    //             element.animate({
    //                 opacity: 1
    //             }, 1000, done);
    //         },
    //         leave: function (element, done) {
    //             element.css({
    //                 opacity: 1
    //             });
    //             element.animate({
    //                 opacity: 0
    //             }, 1000, done);
    //         }
    //     };
    // });