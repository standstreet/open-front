//module 方法的第一个参数为模块的名称，第二个参数为它的依赖模块列表
var consoleApp=angular.module("consoleApp.controllers",[
    'consoleApp.services',
    'ngCookies',
    'ui.bootstrap'
]);


/**********************************整体body模块**************************************/
consoleApp.controller("indexController",function($scope,$window,$location,$cookies,$state,$stateParams,normal){
    /*******************************获取普通移动应用下的应用列表;************/
    var uuid="464d052b9c174ec2ad96b4e0c60897a9";//用户的唯一标识uuid；
    $scope.normalAppList=function(page,pageSize){
        _showMask();
        normal.getNormalAppList(uuid,page,pageSize).then(function(data){
            if(data.content!=''){
                Tip(data.statusCode);
            }
            $scope.urlPath="index";
            $scope.normalApps=data.content;//获得app的数组列表；
            /****ui-bootstrap方式分页*****/
            $scope.allItems=data.totalElements;//总个数；
            $scope.pages=data.totalPages;//总页数；
            $scope.totalItems =data.totalElements;//20;
            $scope.currentPage = page;//page;
            $scope.pageSize = pageSize;
            $scope.maxSize =10;
            $scope.pageChanged = function () {
                $scope.normalAppList($scope.currentPage, $scope.pageSize);
            };
            _hideMask();
        },function(err){
            if(err.code=='ECONNREFUSED'){
                Tip(err.code);
            }else{
                Tip(err.statusCode);
            }
        });
    }
    //$scope.normalAppList(1,10);//默认显示出应用列表；
})
    .controller("loginController", function ($scope,$window,$location,$cookies,$state,$stateParams,user) {
        /*******************************用户登陆;************/
        $scope.loginName;
        $scope.password;
        $scope.login=function(){
            _showMask();
            console.log("MainController.js"+$scope.loginName+"/"+$scope.password);
            user.login($scope.loginName,$scope.password).then(function(data){
                if(data.content!=''){
                    Tip(data.statusCode);
                }
                alert(JSON.stringify(data))
                _hideMask();
            },function(err){
                if(err.code=='ECONNREFUSED'){
                    Tip(err.code);
                }else{
                    Tip(err.statusCode);
                }
            });
        }
    });
