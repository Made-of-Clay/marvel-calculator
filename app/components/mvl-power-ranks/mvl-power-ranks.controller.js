(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlPowerRankController', MvlPowerRankController)
    ;

    MvlPowerRankController.$inject = ['powerRankService', '$rootScope'];
    function MvlPowerRankController(powerRankService, $rootScope) {
        var vm = this;

        // Properties
        vm.data = [];
        vm.current = null;

        // Methods
        vm.changeRank = changeRank;

        activate();

        function activate() {            
            powerRankService
                .getData()
                .then(storeFetchedData)
                .then(setFirstCurrent)
            ;
        }
        function storeFetchedData(data) {
            vm.data = data.data;
            return data;
        }
        function setFirstCurrent() {
            changeRank(0); // defaults to Shift 0
        }
        function changeRank(index) {
            if(_.isNull(vm.current) || !_.isEqual(vm.data[index], vm.current)) {
                vm.current = vm.data[index];
                $rootScope.$broadcast('change.rank', vm.current);
            }
        }
    }
})(); 