(function () {
    'use strict';

    angular
        .module('app.users')
        .directive('questionnaire', Directive);

    function Directive() {
        return {
            restrict: 'E',
            templateUrl: './template/components/questionnaire.html',
            scope: {},
            link: function (scope, elem, attrs) {
                scope.question = {
                    notification: true,
                    pets: false
                };
            }
        };
    }

})();