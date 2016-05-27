(function () {
    angular
        .module('lodash', [])
        .factory('_', function addLodash() {
            return window._;
        })
    ;
})(); 