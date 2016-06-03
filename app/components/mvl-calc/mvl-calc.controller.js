(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlCalcController', MvlCalcController);

    MvlCalcController.$inject = ['$sce'];
    /* @ngInject */
    function MvlCalcController($sce) {
        var vm = this;
        
        vm.title = 'MvlCalcController';
        vm.buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'backspace', 0, 'clear' ];
        vm.result = 0; // updates as user enters values
        vm.rank = {}; // updates when interface says to

        vm.checkVal = checkVal;
        vm.updateVal = updateVal;

        activate();
        ////////////////
        function activate() {
            // get current rank from interface
            // set to prop here
            console.log('activated');
        }
        function checkVal(value) {
            ;
        }
        function updateVal(value) {
            // ::: HERE :::
            // view should use one-way data bind
            // update here should update in view

            // if number, append number to value
            if(typeof value === 'number') {
                var newRes = calcNewRes(vm.result, value);
                // update color based on range (make background directive)
            }
            // if string, enter switch
        }
        function calcNewRes(oldRes, newRes) {
            var num = oldRes.toString() + newRes.toString();
            return checkRange(num);
        }
        function checkRange(num) {
            return (num < 0)   ? 0   : 
                   (num > 100) ? 100 :
                    num;
        }
    }
})();