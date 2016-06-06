(function() {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlColorResult', mvlColorResult);

    mvlColorResult.$inject = [];
    /* @ngInject */
    function mvlColorResult() {
        var curDir = 'app/components/mvl-color-result';
        var directive = {
            bindToController: true,
            controller: 'MvlColorResultController',
            controllerAs: 'vm',
            restrict: 'AE',
            scope: {},
            templateUrl: curDir + '/mvl-color-result.html'
        };

        return directive;
    }
})();