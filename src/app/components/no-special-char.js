(function () {
    'use strict';

    angular
        .module('app.users')
        .directive('noSpecialChar', Directive);

    function Directive() {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    if (inputValue == null) {
                        return '';
                    }

                    var cleanInputValue = inputValue.replace(/[^\w\s]/gi, '');
                    if (cleanInputValue !== inputValue) {
                        modelCtrl.$setViewValue(cleanInputValue);
                        modelCtrl.$render();
                    }
                    return cleanInputValue;
                });
            }
        };
    }

})();
