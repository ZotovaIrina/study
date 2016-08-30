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
            console.log('data', JSON.stringify($scope.user));
            Users.create(JSON.stringify($scope.user))
                .then(function() {
                    console.log('Success');
                    $state.go('users');
                })
                .catch(function(err) {
                    console.log(err);
                });
        };

    }

})();
