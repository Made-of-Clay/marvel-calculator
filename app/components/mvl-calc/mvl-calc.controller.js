(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlCalcController', MvlCalcController);

    MvlCalcController.$inject = [];
    /* @ngInject */
    function MvlCalcController() {
        var vm = this;
        
        vm.title = 'MvlCalcController';
        vm.buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'backspace', 0, 'clear' ];

        activate();
        ////////////////
        function activate() {
            console.log('activated');
        }
        function checkVal(value) {
            console.log('value',value);
            return value;
        }
    }
})();