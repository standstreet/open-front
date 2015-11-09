var consoleApp=angular.module("consoleApp",[
    'ui.router',
    'consoleApp.controllers',
    'consoleApp.services'
]);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
consoleApp.run(function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
/**
 * 配置路由。
 * 注意这里采用的是ui-router这个路由，而不是ng原生的路由。
 * ng原生的路由不能支持嵌套视图，所以这里必须使用ui-router。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */



consoleApp.config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';

    ///表示你进入index.html作为前端路由的基础页面
    //后面的/index就是你需要的dandelion下index.html作为主页面
    //具体图片显示不出来是因为路径没对 因为在/index中 是被public下的index包裹的
    // 所以你应该把页面想做她是在public的index页面下 然后再来找对应的路径
    $urlRouterProvider.otherwise('/form');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'index.html',
            controller:"indexController"
        })
        .state('form', {
            url: '/form',
            templateUrl: 'views/nice-admin/index.html',
            controller:"indexController"
        })
        .state('login', {
            url: '/login',
            templateUrl: 'views/home/login.html',
            controller:"loginController"
        })
        .state('form.component', {
            url: '/form/component',
            templateUrl: 'views/nice-admin/form_component.html',
            controller:"indexController"
        })
        .state('form.validation', {
            url: '/form/validation',
            templateUrl: 'views/nice-admin/form_validation.html',
            controller:"indexController"
        })
});