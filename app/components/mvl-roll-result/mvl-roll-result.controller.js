(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlRollResultController', MvlRollResultController);

    MvlRollResultController.$inject = ['$sce', '_', '$rootScope'];
    /* @ngInject */
    function MvlRollResultController($sce, _, $rootScope) {
        var vm = this;
        
        // Properties
        vm.title = 'MvlRollResultController';
        vm.buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'backspace', 0, 'clear' ];
        vm.result = 0; // updates as user enters values

        // Methods
        vm.updateVal = updateVal;

        activate();
        ////////////////
        function activate() {
            $rootScope.$on('change.misc', changeMisc);
        }
        function changeMisc(event, miscData) {
            vm.resultMisc = miscData;
        }
        function updateVal(value) {
            if(_.isNumber(value)) {
                var newRes = calcNewRes(vm.result, value);
                vm.result = newRes;
            } else if(_.isString(value)) {
                switch(value) {
                    case 'backspace':
                        vm.result = backspcVal(vm.result);
                        break;
                    case 'clear':
                        vm.result = 0;
                        break;
                }
            }
            // change.result broadcasts vm.result
            $rootScope.$broadcast('change.result', vm.result);
            // if string, enter switch
        }
        function calcNewRes(oldRes, newRes) {
            var num = oldRes.toString() + newRes.toString();
            num = (num.substr(0, 1) === '0' && num !== '0') ? num.substring(1) : num;
            return checkRange(num);
        }
        function checkRange(num) {
            return (num < 0)   ? 0   : 
                   (num > 100) ? 100 :
                    num;
        }
        function backspcVal(val) {
            val = (_.isNumber(val)) ? val.toString() : val;
            return val.length === 1 
                ? 0 
                : val.substr(0, val.length - 1);
        }
    }
})();