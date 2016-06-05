(function() {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlMain', mvlMain);

    mvlMain.$inject = [];
    /* @ngInject */
    function mvlMain() {
        var curDir = 'app/components/mvl-main';
        var directive = {
            bindToController: true,
            controller: 'MvlMainController',
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            scope: {},
            templateUrl: curDir + '/mvl-main.html'
        };

        return directive;

        function link(scope, element, attrs, ctrl) {
        }
    }
})();