(function () {
    angular
        .module('marvel')
        .controller('OffCanvasController', OffCanvasController)
    ;

    OffCanvasController.$inject = ['_'];
    function OffCanvasController(_) {
        var vm = this;
        var classes = {
            list: 'offcanvas-list',
            toggle: 'offcanvas-toggle'
        };

        vm.showing = true;
        vm.list = {
            class: ''
        };
        vm.toggle = {
            text: 'Toggle',
            class: ''
        };

        vm.show = show;
        vm.handleToggle = handleToggle;
        vm.handleList = handleList;

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

        function handleToggle(el, atts) {
            if(el.hasClass('.' + classes.toggle)) {
                handleClassing(el, atts.listClass);

                if(_.isString(atts.toggleText)) {
                    el.text(atts.toggleText);
                }
            }
        }
        function handleList(el, atts) {
            if(el.hasClass('.' + classes.list)) {
                handleClassing(el, atts.listClass);
            }
        }
        function handleClassing(el, cls) {
            if(_.isString(cls)) {
                el.addClass(cls);
            }
        }
    }
})();