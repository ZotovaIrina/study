(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersCtrl', UsersCtrl);

    function UsersCtrl($scope, Users) {
        $scope.users = [];
        Users.getAllUser()
            .then(function (res) {
                $scope.users = res.data;
            })
            .catch(function (err) {
                console.log('Error! ', err);
            });

        $scope.delete = function (id) {
            console.log('user delete with id: ', id);
            Users.delete(id)
                .then(function (res) {
                    console.log('Success', res);
                    Users.getAllUser()
                        .then(function (res) {
                            $scope.users = res.data;
                        });
                })
                .catch(function(err){
                    console.log('Error!', err);
                });
        };

    }

})();