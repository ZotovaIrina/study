(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('dashboard', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: './template/modules/dashboard/dashboard/template.html',
                        controller: 'Dashboard'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

    }

})();

