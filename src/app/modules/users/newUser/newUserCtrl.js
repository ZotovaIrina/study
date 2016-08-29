(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('NewUserCtrl', NewUser);

    function NewUser($scope, usersService, $state) {
        console.log("newUser");
        $scope.user = {};
        $scope.SubmitUser = function() {
            usersService.addUser($scope.user)
                .then(function() {
                    console.log("Success");
                    $state.go("users");
                })
                .catch(function(err) {
                    console.log(err);
                });
        };

    }

})();