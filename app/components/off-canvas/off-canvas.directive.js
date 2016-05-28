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
            transclude: true,
            restrict: 'AE',
            controller: 'OffCanvasController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                toggleText: '@offCanvasToggleText'
            },
            link: link
        };

        return directive;

        function link(scope, elem, atts) {
            if(isString(atts.offCanvasToggleText)) {
                scope.vm.toggleText = atts.offCanvasToggleText;
            }
        }
        function isString(val) {
            return typeof val === 'string';
        }
    }
})();