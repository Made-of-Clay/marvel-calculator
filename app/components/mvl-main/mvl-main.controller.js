(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlMainController', MvlMainController);

    MvlMainController.$inject = ['$rootScope'];
    /* @ngInject */
    function MvlMainController($rootScope) {
        var vm = this;
        
        // Properties
        vm.title = 'MvlMainController';
        vm.rank = null;
        vm.result = 0;

        // Methods
        // vm.updateVal = updateVal;

        activate();
        ////////////////
        function activate() {
            $rootScope.$on('change.rank', function rankChanged(event, newRank) {
                vm.rank = newRank;
                displayNewRank(newRank);
            });
            $rootScope.$on('change.result', function resultChanged(event, newResult) {
                vm.result = newResult;
            });
        }
        function displayNewRank(rank) {
            var newDisp = rank.abbv + ' (' + rank.mid + ')';
            $rootScope.$broadcast('change.display', newDisp);
        }
    }
})();