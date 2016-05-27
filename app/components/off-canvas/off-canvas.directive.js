(function () {
    angular
        .module('marvel')
        .directive('offCanvas', offCanvas)
    ;

    function offCanvas() {
        var curDir = 'app/components/off-canvas';
        var directive = {
            templateUrl: curDir + '/off-canvas.html',
            restrict: 'AE',
            controller: 'OffCanvasController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {},
            link: link
        };

        return directive;

        function link(scope, elem, atts) {
            // console.log('working on link() - offCanvas in progress');
            // console.log('scope, elem, atts',scope, elem, atts);
            // check for atts to customize template, otherwise let controller set defaults
            if(isString(atts.listClass)) {
                scope.vm.list.class = atts.listClass;
            }
            if(isString(atts.toggleText)) {
                scope.vm.toggle.text = atts.toggleText;
            }
            if(isString(atts.toggleClass)) {
                scope.vm.toggle.class = atts.toggleClass;
                // elem.children().forEach()
            }
        }
        function isString(val) {
            return typeof val === 'string';
        }
    }
})();