(function () {
    'use strict';

    angular
        .module('app.users')
        .config(UsersRouter);

    function UsersRouter($stateProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                views: {
                    'content': {
                        templateUrl: './template/modules/users/users/users.html',
                        controller: 'UsersCtrl'
                    }
                }

            })
            .state('users.newUser', {
                url: '/users/newUser',
                views: {
                    'content@': {
                        templateUrl: './template/modules/users/newUser/newUser.html',
                        controller: 'NewUserCtrl'
                    }
                }

            });

    }

})();