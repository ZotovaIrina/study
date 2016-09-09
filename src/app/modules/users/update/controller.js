(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('UpdateCtrl', Update);

    function Update($scope, Users, $stateParams, $state) {
        var ID = $stateParams.id;
        $scope.user = {};
        Users.getUser(ID)
            .then(function(res) {
                $scope.user = res.data;
            })
            .catch(function(err) {
                console.log('Error!', err);
            });
        $scope.update = function() {
            console.log('$scope.user', $scope.user);
            Users.update(ID, JSON.stringify($scope.user))
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
