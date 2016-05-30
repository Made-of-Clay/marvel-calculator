(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('OffCanvasController', OffCanvasController)
    ;

    OffCanvasController.$inject = ['_'];
    function OffCanvasController(_) {
        var vm = this;

        // Properties
        vm.showing = true;
        vm.toggleText = 'Toggle';

        // Methods
        vm.show = show;

        activate();

        function activate() {
            // init stuff
        }

        function show(showIt) {
            if(!_.isUndefined(showIt)){
                vm.showing = showIt;
            }
            vm.showing = !vm.showing;
        }
    }
})();