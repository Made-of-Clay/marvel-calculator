(function () {
    angular
        .module('marvel')
        .controller('OffCanvasController', OffCanvasController)
    ;

    function OffCanvasController() {
        var vm = this;

        vm.showing = true;
        vm.list = {
            class: ''
        };
        vm.toggle = {
            text: 'Toggle',
            class: ''
        };

        vm.show = show();

        activate();

        // what does offcanvas do?
        // manages generation of list of items
        // listens for click on toggle
        // adds/removes class based on clicked
        // animation is managed by css transition
        // should expose toggle command if external control wants to use it
        function activate() {
            console.log('OffCanvasController activated');
        }

        function show(showIt) {
            showIt = typeof showIt === 'boolean' ? showIt : true;
            vm.showing = showIt;
        }
    }
})();