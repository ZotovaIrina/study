(function () {
    'use strict';

    angular
        .module('app.services')
        .service('Users', User);

    function User($http, $q, API_BASE_URL) {

        var SERVICE_BASE_URL = API_BASE_URL + 'users';

        this.getAllUser = function () {
            return $http.get(SERVICE_BASE_URL);
        };


        this.getUser = function (id) {
            return $http.get(SERVICE_BASE_URL + '/' + id);
        };

        this.create = function (user) {
            return $http.post(SERVICE_BASE_URL, user, {headers: {'Content-Type': 'application/json'}});
        };

        this.update = function (id, user) {
            return $http.put(SERVICE_BASE_URL + '/' + id, user, {headers: {'Content-Type': 'application/json'}});
        };

        this.delete = function (id) {
            return $http.delete(SERVICE_BASE_URL + '/' + id);
        };

    }

})();
