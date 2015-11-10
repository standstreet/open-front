var indexApp = angular.module('indexApp.servicesNew', [
    'ngCookies'
]);

/****************************普通移动应用模块*******************************/
indexApp.factory("normal", function ($http, $q, $cookies) {
    return {
        //获取普通移动应用下的应用列表；
        getNormalAppList: function (uuid, currentPage, pageSize) {
            var deferred = $q.defer();
            console.log("service从controller中拿到的uuid为：" + uuid + "当前页:" + currentPage + "单页中应用个数:" + pageSize);
            $http.get("/apps", {params: {uuid: uuid, page: currentPage, pageSize: pageSize}}).success(function (data) {
                if (data.code == 'ECONNREFUSED') {
                    return deferred.reject(data);
                } else {
                    return deferred.resolve(data);
                }
            }).error(function (error) {
                return deferred.reject(error);
            });
            return deferred.promise;
        }
    }
})
    .factory("user", function ($http, $q, $cookies) {
        return {
            //获取普通移动应用下的应用列表；
            login: function (loginName, password) {
                var deferred = $q.defer();
                console.log("MainService.js"+loginName+"/"+password);
                $http.post("/user", {loginName: loginName, password: password}).success(function (data) {
                    if (data.code == 'ECONNREFUSED') {
                        return deferred.reject(data);
                    } else {
                        return deferred.resolve(data);
                    }
                }).error(function (error) {
                    return deferred.reject(error);
                });
                return deferred.promise;
            }
        }
    });





