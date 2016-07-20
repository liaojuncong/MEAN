var appName = "CongApp";
angular.module(appName).controller("app.dashboard", ["$rootScope","$scope", function ($rootScope, $scope) {
    var topics = [{
        title: "书山有路第十一期：程序员修炼之道-第二章-注重实效的途径--第五天",
        type: "读书",
        visitedCount: 80,
        commentCount: 2,
        postTime: '2016/5/30 20:32',
        author: 'stoneniqiu',
        img: 'http://upload.jianshu.io/users/upload_avatars/133630/d5370e672fd4.png?imageMogr/thumbnail/90x90/quality/100'
    }, {
        title: "《明朝那些事儿》之闲言散语",
        type: "书评",
        visitedCount: 180,
        commentCount: 20,
        postTime: '三月之前',
        author: '卡卡卡萨布兰卡 ',
        img: 'http://upload.jianshu.io/users/upload_avatars/1675188/2d0810ccc03d.jpg?imageMogr/thumbnail/90x90/quality/100'
    }, {
        title: "有《程序员修炼之道》高清版吗？",
        type: "求书",
        visitedCount: 90,
        commentCount: 1,
        postTime: '2016/5/15 21:32',
        author: '吾不知 ',
        img: 'http://upload.jianshu.io/users/upload_avatars/1125491/3910f3825f73.jpg?imageMogr/thumbnail/90x90/quality/100',
    }, {
        title: "《国富论》-读书笔记",
        type: "书评",
        visitedCount: 180,
        commentCount: 20,
        postTime: '2月之前',
        author: '寻海 ',
        img: 'http://upload.jianshu.io/users/upload_avatars/133630/d5370e672fd4.png?imageMogr/thumbnail/90x90/quality/100'
    }, {
        title: "《高效人士的七个习惯》读书笔记",
        type: "书评",
        visitedCount: 180,
        commentCount: 20,
        postTime: '2月之前',
        author: '书虫纪庆 ',
        img: 'http://upload.jianshu.io/users/upload_avatars/1429280/454c495361f9.jpg?imageMogr/thumbnail/90x90/quality/100'
    }, {
        title: "《css揭秘》这本书如何",
        type: "求索",
        visitedCount: 58,
        commentCount: 3,
        postTime: '一星期前',
        author: 'Watery_D_Lotus ',
        img: 'http://upload.jianshu.io/users/upload_avatars/1449533/a2d98762484a.jpg?imageMogr/thumbnail/90x90/quality/100'
    }];

    $scope.list = topics;
}]);