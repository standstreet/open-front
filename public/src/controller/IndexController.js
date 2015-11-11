//module 方法的第一个参数为模块的名称，第二个参数为它的依赖模块列表
var indexApp=angular.module("indexApp.controllers",[
    'indexApp.indexService',
    'ngCookies',
    'ui.bootstrap'
]);


/**********************************整体body模块**************************************/
indexApp.controller("indexController",function($scope,$window,$location,$cookies,$state,$stateParams){
    /*******************************获取普通移动应用下的应用列表;************/
    var uuid="464d052b9c174ec2ad96b4e0c60897a9";//用户的唯一标识uuid；
    $scope.normalAppList=function(page,pageSize){
        _showMask();
    }
});
