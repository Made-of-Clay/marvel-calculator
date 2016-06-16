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
                updateColor();
            });
            $rootScope.$on('change.result', function resultChanged(event, newResult) {
                vm.result = newResult;
                updateColor();
            });
        }
        function displayNewRank(rank) {
            var newDisp = rank.abbv + ' (' + rank.mid + ')';
            $rootScope.$broadcast('change.display', newDisp);
        }
        function updateColor() {
            if(_.isNull(vm.rank)) { console.error('noop'); return; }
            var colorMatch = 'white';
            var ignore = false;
            _.forEach(['white','green','yellow','red'], function checkEachColor(color) {
                if(ignore) return;

                if(_.isArray(vm.rank[color])) {
                    var min = vm.rank[color][0];
                    var max = vm.rank[color][1];

                    if(_.inRange(vm.result, min, max+1)) { // max should be inclusive
                        colorMatch = color;
                        ignore = true; // skips logic for future iterations
                    }
                } else {
                    var rank = vm.rank[color];

                    if(rank === vm.result) {
                        colorMatch = color;
                        ignore = true;
                    }
                }

            });
            $rootScope.$broadcast('change.color', colorMatch);
        }
    }
})();