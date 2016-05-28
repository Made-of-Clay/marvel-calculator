(function () {
    angular
        .module('marvel')
        .directive('mvlPowerRankController', mvlPowerRankController)
    ;

    mvlPowerRankController.$inject = ['powerRankService'];
    function mvlPowerRankController() {
        var vm = this;

        // Properties

        // Methods

        activate();

        function activate() {
            // get data from service
            // set data for view
        }
    }
})(); 