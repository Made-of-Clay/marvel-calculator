(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlColorResultController', MvlColorResultController)
    ;

    MvlColorResultController.$inject = ['$rootScope'];
    function MvlColorResultController($rootScope) {
        var vm = this;

        // Properties
        vm.color = 'white';

        // Methods
        // vm.changeRank = changeRank;

        activate();

        function activate() {
            $rootScope.$on('change.color', function updateColor(event, color) {
                vm.color = color;
            });
        }
    }
})();