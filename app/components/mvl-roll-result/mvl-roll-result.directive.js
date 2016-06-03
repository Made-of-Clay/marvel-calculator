(function() {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlRollResult', mvlRollResult);

    mvlRollResult.$inject = [];
    /* @ngInject */
    function mvlRollResult() {
        // var curDir = 'app/components/mvl-calc';
        var curDir = 'app/components/mvl-roll-result';
        var directive = {
            bindToController: true,
            controller: 'MvlRollResultController',
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {},
            templateUrl: curDir + '/mvl-roll-result.html'
        };

        return directive;

        function link(scope, element, attrs) {}
    }
})();