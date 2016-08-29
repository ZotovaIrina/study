(function () {
    'use strict';

    angular
        .module('app.users')
        .service('usersService', UserService);

    function UserService($http, $q, userDB, $filter) {

        var users;

        this.getAllUser = function () {
            return $http.get(userDB)
                .then(function (res) {
                    console.log("service get list of users: ", res);
                    return res.data;

                })
                .catch(function (err) {
                    return $q.reject(err);
                });
        };

        users = this.getAllUser();

        this.getUser = function (id) {
            return $http.get(userDB)
                .then(function (res) {
                    console.log("service get list of users: ", res.data);
                    return $filter('filter')(res.data, {id: id})[0];
                })
                .catch(function (err) {
                    return $q.reject(err);
                });
        };

        this.addUser = function (user) {
            angular.forEach(users, function (value, key) {
                if (value.userName === user.userName) {
                    return $q.reject({
                        text: "This user name already exist"
                    });
                } else if (value.email === user.email) {
                    return $q.reject({
                        text: "This e-mail address already using"
                    });
                }
            });
            user.id = users.length;
            return $http.post(userDB, user)
                .then(function (res) {
                    return res;
                })
                .catch(function (err) {
                    return $q.reject(err);
                });
        };


    }

})();