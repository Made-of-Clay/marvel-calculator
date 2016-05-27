(function () {
    angular
        .module('marvel')
        .directive('offCanvas', offCanvas)
    ;

    offCanvas.$inject = ['_'];
    function offCanvas(_) {
        var curDir = 'app/components/off-canvas';
        var directive = {
            templateUrl: curDir + '/off-canvas.html',
            restrict: 'AE',
            controller: 'OffCanvasController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                // list: {
                //     class: '@listClass'
                // },
                // toggle: {
                //     class: '@toggleClass',
                //     text: '@toggleText'
                // }
                listClass: '@',
                toggleClass: '@',
                toggleText: '@'
            },
            link: link
        };

        return directive;

        function link(scope, elem, atts) {
            if(isString(atts.listClass)) {
                scope.vm.list.class = atts.listClass;
            }
            if(isString(atts.toggleText)) {
                scope.vm.toggle.text = atts.toggleText;
            }
            if(isString(atts.toggleClass)) {
                scope.vm.toggle.class = atts.toggleClass;
            }
            _.forEach(elem.children(), function findToggle(el, inx) {
                scope.vm.handleList(angular.element(el), atts);
                scope.vm.handleToggle(angular.element(el), atts);
            });
        }
        function isString(val) {
            return typeof val === 'string';
        }
    }
})();