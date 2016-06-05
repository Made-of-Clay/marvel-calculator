(function() {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlRankDisplay', mvlRankDisplay);

    mvlRankDisplay.$inject = [];
    /* @ngInject */
    function mvlRankDisplay() {
        var directive = {
            bindToController: true,
            controller: 'MvlRankDisplayController',
            controllerAs: 'vm',
            restrict: 'AE',
            scope: {},
            template: '{{vm.display}}'
        };

        return directive;
    }
})();