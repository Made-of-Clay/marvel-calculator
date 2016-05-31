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

        vm.checkVal = checkVal;

        activate();
        ////////////////
        function activate() {
            console.log('activated');
        }
        function checkVal(value, i) {
            console.log('value',value);
            console.log('i',i);
            return value;
        }
    }
})();