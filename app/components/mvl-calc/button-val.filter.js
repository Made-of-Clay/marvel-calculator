(function() {
    'use strict';

    angular
        .module('marvel')
        .filter('buttonVal', buttonVal);

    buttonVal.$inject = ['$sce'];
    function buttonVal($sce) {
        return buttonValFilter;

        function buttonValFilter(value) {
            var val;
            if(isNaN(value)) {
                // backspace or clear
                if(value.toLowerCase() === 'backspace') {
                    val = $sce.trustAsHtml('&laquo;');
                } else if(value.toLowerCase() === 'clear') {
                    val = 'C';
                } else console.error('Whaaa?');
            } else {
                val = value;
            }

            return val;
        }
    }
})();