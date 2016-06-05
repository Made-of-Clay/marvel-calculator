(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlRankDisplayController', MvlRankDisplayController)
    ;

    MvlRankDisplayController.$inject = ['$rootScope'];
    function MvlRankDisplayController($rootScope) {
        var vm = this;

        // Properties
        vm.display = '';

        // Methods
        // vm.changeRank = changeRank;

        activate();

        function activate() {            
            $rootScope.$on('change.display', changeDispay);
        }
        function changeDispay(event, newDisp) {
            vm.display = newDisp;
        }
    }
})(); 