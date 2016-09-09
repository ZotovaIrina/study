(function () {
    'use strict';

    angular
        .module('app.users')
        .directive('userList', Directive);

    function Directive() {
        return {
            restrict: 'E',
            templateUrl: './template/components/user-list.html',
            transclude: true,
            scope: {
                userName: '@'
            },
            controllerAs: 'ctrl',
            controller: function ($scope, $element, $transclude) {
                var ctrl = this;
                var content = $element.find('.content');

                ctrl.expand = function() {
                    $transclude(function(transEl) {
                        content.append(transEl);

                    });
                    ctrl.expanded = true;
                };

                ctrl.collapse = function() {
                    content.empty();
                    ctrl.expanded = false;
                };


            }
        };
    }

})();