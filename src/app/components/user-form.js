(function () {
    'use strict';

    angular
        .module('app.users')
        .directive('userForm', Directive);

    function Directive() {
        return {
            restrict: 'E',
            templateUrl: './template/components/user-form.html',
            scope: {
                submit:'@submitText',
                user: '=data',
                onSubmit: '&'
            },
            link: function (scope, element, attr) {
            }
        };
    }

})();