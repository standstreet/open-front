/**
 * Created by Administrator on 2015/11/2.
 */

var loginApp=angular.module("loginApp.service",[
    "ngCookies"
]);
loginApp.factory("user",function($http,$q,$cookies){
   return {
       login:function(user){
           var deferred=$q.defer();
           console.log("LoginService.js->loginApp.factory(user,..)登录:"+JSON.stringify(user));
           $http.post("/login",{user:user}).success(function(data){
               console.log("LoginService->登录成功:"+JSON.stringify(data));
               if(data.code=="200"){
                   $cookies.user=base64encode(JSON.stringify(user));
                   setCookie("userCookie",data.code,1);//设置cookie;
                   return deferred.resolve($cookies.user);
               }else{
                   return deferred.reject(data);
               }
           }).error(function(err){
               console.log("LoginService.js->error(function):"+err);
               return deferred.reject(err);
           });
           return deferred.promise;
       }


   }
});
