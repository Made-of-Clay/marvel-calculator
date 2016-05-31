(function() {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlCalc', mvlCalc);
    
    mvlCalc.$inject = [];
    /* @ngInject */
    function mvlCalc() {
        var curDir = 'app/components/mvl-calc';
        var directive = {
            bindToController: true,
            controller: 'MvlCalcController',
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {},
            templateUrl: curDir + '/mvl-calc.html'
        };

        return directive;

        function link(scope, element, attrs) {}
    }
})();