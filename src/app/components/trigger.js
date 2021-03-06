(function () {
    'use strict';

    angular
        .module('app.users')
        .directive('trigger', Directive);

    function Directive() {
        return {
            restrict: 'E',
            scope: {
                triggerValue: '='
            },
            template: '<div id="trigger-container" ng-click="trigger()"><div id="trigger" ng-class="position"></div></div> {{answer}}',
            link: function (scope, element, attrs) {
                scope.$watch('triggerValue', function() {
                    if(scope.triggerValue === true) {
                        scope.answer = 'Yes';
                        scope.position = 'trigger-positive';
                    } else if(scope.triggerValue === undefined) {
                        scope.triggerValue = true;
                    } else{
                        scope.answer = 'No';
                        scope.position = 'trigger-negative';
                    }
                });

                scope.trigger = function () {
                    scope.triggerValue = !scope.triggerValue;
                };

            }
        };
    }

})();