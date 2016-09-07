(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('CreateCtrl', Create);

    function Create($scope, Users, $state) {
        $scope.user = {};
        Users.getAllUser().then(function (res) {
            $scope.user.id = res.data.length;
        });
        $scope.create = function() {
            Users.create(JSON.stringify($scope.user))
                .then(function() {
                    $state.go('users');
                })
                .catch(function(err) {
                    console.log(err);
                });
        };

    }

})();
