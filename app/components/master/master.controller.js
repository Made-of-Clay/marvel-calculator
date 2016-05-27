(function () {
    angular
        .module('marvel')
        .controller('MasterController', MasterController)
    ;
    
    MasterController.$inject = ['masterDataService']
    function MasterController(masterDataService) {
        var vm = this;

        vm.ranks = {};

        activate();

        function activate() {
            return getData();
        }

        function getData() {
            return masterDataService.getData()
                .then(storeFetchedData)
                .then(function(){
                    console.log('ranks',vm.ranks);
                })
            ;
        }
        function storeFetchedData(data) {
            vm.ranks = data.data;
            return data; // for chaining
        }
    }
})(); 