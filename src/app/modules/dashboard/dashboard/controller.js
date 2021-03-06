(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('Dashboard', Dashboard);

    function Dashboard($scope) {

        $scope.password = '';
        $scope.grade = function() {
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };
    }

})();
