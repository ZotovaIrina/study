angular.module('dashboard')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: './template/dashboard.html',
                        controller: 'DashboardCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/');
    }]);