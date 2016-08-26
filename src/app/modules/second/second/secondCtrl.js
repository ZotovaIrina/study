(function () {
    'use strict';

    angular
        .module('second')
        .controller('SecondCtrl', SecondCtrl);

    function SecondCtrl() {

        console.log('SecondCtrl!');

    }

})();