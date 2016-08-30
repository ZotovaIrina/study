(function () {
    'use strict';

    angular
        .module('app.guitar')
        .config(config);

    function config($stateProvider) {

        $stateProvider
            .state('guitar', {
                url: '/guitar',
                views: {
                    'content': {
                        templateUrl: './template/modules/guitar/guitar/template.html',
                        controller: 'GuitarCtrl'
                    }
                }

            });

    }

})();
