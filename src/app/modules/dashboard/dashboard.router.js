(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(DashboardRouter);

    function DashboardRouter($stateProvider, $urlRouterProvider) {
        console.log("Dashboard router");
        $stateProvider

            .state('dashboard', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: './template/modules/dashboard/dashboard/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    }

})();

