(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersCtrl', Users);

    function Users($scope, usersService) {
        $scope.users = [];
        usersService.getAllUser()
            .then(function (res) {
                $scope.users = res;
            })
            .catch(function (err) {
                console.log("Error! ", err);
            });

        $scope.userEdit = function (id) {
            console.log("user Edit");
        };
        $scope.userDelete = function (id) {
            console.log("user delete");
        };

    }

})();