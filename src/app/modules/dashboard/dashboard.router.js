(function () {
    'use strict';

    angular
        .module('dashboard')
        .config(DashboardRouter);

    function DashboardRouter($stateProvider, $urlRouterProvider) {

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

