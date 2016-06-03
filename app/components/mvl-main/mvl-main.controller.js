(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlMainController', MvlMainController);

    MvlMainController.$inject = [];
    /* @ngInject */
    function MvlMainController() {
        var vm = this;
        
        // Properties
        vm.title = 'MvlMainController';

        // Methods
        // vm.updateVal = updateVal;

        activate();
        ////////////////
        function activate() {
        }
    }
})();