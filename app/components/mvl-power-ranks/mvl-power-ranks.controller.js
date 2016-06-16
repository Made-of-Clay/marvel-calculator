(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlPowerRankController', MvlPowerRankController)
    ;

    MvlPowerRankController.$inject = ['powerRankService', '$rootScope', '_'];
    function MvlPowerRankController(powerRankService, $rootScope, _) {
        var vm = this;

        // Properties
        vm.data = [];
        vm.current = null;
        vm.showing = false;

        // Methods
        vm.changeRank = changeRank;
        vm.show = show;

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
        function show(showIt) {
            if(!_.isUndefined(showIt)){
                vm.showing = showIt;
            }
            vm.showing = !vm.showing;
        }
    }
})(); 