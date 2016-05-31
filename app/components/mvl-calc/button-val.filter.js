(function() {
    'use strict';

    angular
        .module('marvel')
        .filter('buttonVal', buttonVal);

    buttonVal.$inject = ['_'];
    function buttonVal(_) {
        return buttonValFilter;

        function buttonValFilter(value) {
            if(value)
            return value;
        }
    }
})();