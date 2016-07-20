var congApp = angular.module("CongApp", ["ui.router", 'ngAnimate', "oc.lazyLoad"]);
var appName = "CongApp";

congApp
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
    .config(["$controllerProvider", function ($controllerProvider) {
        $controllerProvider.allowGlobals();
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