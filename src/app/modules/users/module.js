(function () {
    'use strict';

    angular
        .module('app.users')
        .config(config);

    function config($stateProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                views: {
                    'content': {
                        templateUrl: './template/modules/users/users/template.html',
                        controller: 'UsersCtrl'
                    },
                    'navigation': {
                        templateUrl: './template/modules/navigation/template.html'
                    }
                }

            })
            .state('users.create', {
                url: '/users/create',
                views: {
                    'content@': {
                        templateUrl: './template/modules/users/create/template.html',
                        controller: 'CreateCtrl'
                    }
                }

            })
            .state('users.update', {
                url: '/users/update/:id',
                views: {
                    'content@': {
                        templateUrl: './template/modules/users/update/template.html',
                        controller: 'UpdateCtrl'
                    }
                }

            });

    }

})();
