(function () {
    'use strict';

    angular
        .module('app.users')
        .controller('UsersCtrl', UsersCtrl);

    function UsersCtrl($scope, Users) {
        $scope.loadData = false;
        $scope.message = 'Loading...';
        $scope.users = [];

        Users.getAllUser()
            .then(function (res) {
                $scope.loadData = true;
                $scope.users = res.data;
            })
            .catch(function (err) {
                $scope.loadData = false;
                $scope.message = 'Error ' + err.status + ' ' + err.statusText;
                console.log('Error! ', err);
            });

        $scope.delete = function (id) {
            console.log('user delete with id: ', id);
            Users.delete(id)
                .then(function (res) {
                    console.log('Success', res);
                    Users.getAllUser()
                        .then(function (res) {
                            console.log('get user list after delete');
                            $scope.loadData = true;
                            $scope.users = res.data;
                        });
                })
                .catch(function (err) {
                    $scope.loadData = false;
                    console.log('Error!', err);
                    $scope.message = 'Error ' + err.status + ' ' + err.statusText;
                });
        };

    }

})();
