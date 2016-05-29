(function () {
    angular
        .module('marvel')
        .directive('mvlPowerRanks', mvlPowerRanks)
    ;

    mvlPowerRanks.$inject = ['powerRankService'];
    function mvlPowerRanks(powerRankService) {
        var path = 'app/components/mvl-power-ranks';
        var directive = {
            templateUrl: path + '/mvl-power-ranks.html',
            restrict: 'AE',
            controller: 'mvlPowerRankController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {}
        };

        return directive;
    }
})(); 