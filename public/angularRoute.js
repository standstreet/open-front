var indexApp=angular.module("indexApp",[
    'ui.router',
    'indexApp.controllers',
    'indexApp.indexService',
    'indexApp.servicesNew'
]);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
indexApp.run(function ($rootScope, $state, $stateParams) {
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



indexApp.config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
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
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '/views/home/home.html',
            controller:"indexController"
        })
        .state('sidebar', {
            url: '/sidebar',
            templateUrl: 'views/nice-admin/index.html',
            controller:"indexController"
        })
        .state('sidebar.component', {
            url: '/sidebar/component',
            templateUrl: 'views/nice-admin/form_component.html',
            controller:"indexController"
        })
        .state('sidebar.validation', {
            url: '/sidebar/validation',
            templateUrl: 'views/nice-admin/form_validation.html',
            controller:"indexController"
        })
        .state('sidebar.general', {
            url: '/sidebar/general',
            templateUrl: 'views/nice-admin/general.html',
            controller:"indexController"
        })
        .state('sidebar.buttons', {
            url: '/sidebar/buttons',
            templateUrl: 'views/nice-admin/buttons.html',
            controller:"indexController"
        })
        .state('sidebar.grids', {
            url: '/sidebar/grids',
            templateUrl: 'views/nice-admin/grids.html',
            controller:"indexController"
        })
        .state('sidebar.widgets', {
            url: '/sidebar/widgets',
            templateUrl: 'views/nice-admin/widgets.html',
            controller:"indexController"
        })
        .state('sidebar.charts', {
            url: '/sidebar/widgets',
            templateUrl: 'views/nice-admin/chart-chartjs.html',
            controller:"indexController"
        })
        .state('sidebar.basic-table', {
            url: '/sidebar/basic-table',
            templateUrl: 'views/nice-admin/basic_table.html',
            controller:"indexController"
        })
        .state('sidebar.profile', {
            url: '/sidebar/profile',
            templateUrl: 'views/nice-admin/profile.html',
            controller:"indexController"
        })
        .state('sidebar.login', {
            url: '/sidebar/login',
            templateUrl: 'views/nice-admin/login.html',
            controller:"indexController"
        })
        .state('sidebar.blank', {
            url: '/sidebar/blank',
            templateUrl: 'views/nice-admin/blank.html',
            controller:"indexController"
        })
        .state('sidebar.404', {
            url: '/sidebar/404',
            templateUrl: 'views/nice-admin/404.html',
            controller:"indexController"
        })
});