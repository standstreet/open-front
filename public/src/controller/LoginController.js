/**
 * Created by Administrator on 2015/11/2.
 */
var loginApp=angular.module("loginApp",[
    "ngCookies",
    "loginApp.service"
]);

loginApp.controller("LoginController",function($scope,$location,$window,user,$cookies){
    $scope.user={
        loginName:"",
        password:""
    }
    $scope.login=function(){
        user.login($scope.user).then(function(data){
            console.log("LoginController"+JSON.stringify($cookies.user));
            console.log("LoginController登陆成功！");
            alert("LoginController.js->登陆成功");
            $window.location="/#/";
        },function(err){
            alert(err.msg);
            console.log("LoginController登陆失败!")
        })
    }
});
