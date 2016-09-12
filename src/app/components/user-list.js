(function () {
    'use strict';

    angular
        .module('app.users')
        .directive('userList', Directive);

    function Directive() {
        var removedElem;
        return {
            restrict: 'E',
            templateUrl: './template/components/user-list.html',
            transclude: true,
            scope: {
                userName: '@'
            },
            link: function (scope, element, attr, ctrl, transclude) {

                var content = element[0].querySelector('.card-content');
                scope.moreButton = true;
                angular.element(content.children).remove();


                scope.collapse = function () {
                    angular.element(content.children).remove();
                    scope.moreButton = true;
                };

                scope.expand = function () {
                    transclude(function (clone) {
                        angular.element(content).append(clone);
                        scope.moreButton = false;
                    });
                };

            }
        };


        // return {
        //     restrict: 'E',
        //     replace: true,
        //     scope: {
        //         items: '='
        //     },
        //     templateUrl: './template/components/user-list.html'
        // };


    }

})();