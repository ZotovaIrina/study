angular.module('second')
    .config(function ($stateProvider) {
        $stateProvider
            .state('secondPage', {
                url: '/secondPage',
                views: {
                    'content': {
                        templateUrl: './template/secondPage.html',
                        controller: 'SecondCtrl'
                    }
                }

            });
    });