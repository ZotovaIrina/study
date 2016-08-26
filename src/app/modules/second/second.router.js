(function () {
    'use strict';

    angular
        .module('second')
        .config(SecondRouter);

    function SecondRouter($stateProvider) {

        $stateProvider
            .state('secondPage', {
                url: '/secondPage',
                views: {
                    'content': {
                        templateUrl: './template/modules/second/second/secondPage.html',
                        controller: 'SecondCtrl'
                    }
                }

            });

    }

})();