(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlColorResultController', MvlColorResultController)
    ;

    MvlColorResultController.$inject = ['$rootScope'];
    function MvlColorResultController($rootScope) {
        var vm = this;

        // Properties
        vm.color = 'white';

        // Methods
        // vm.changeRank = changeRank;

        activate();

        function activate() {
            $rootScope.$on('change.color', function updateColor(event, color) {
                vm.color = color;
            });
        }
    }
})();(function() {
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
})();(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlMainController', MvlMainController);

    MvlMainController.$inject = ['$rootScope'];
    /* @ngInject */
    function MvlMainController($rootScope) {
        var vm = this;
        
        // Properties
        vm.title = 'MvlMainController';
        vm.rank = null;
        vm.result = 0;

        // Methods
        // vm.updateVal = updateVal;

        activate();
        ////////////////
        function activate() {
            $rootScope.$on('change.rank', function rankChanged(event, newRank) {
                vm.rank = newRank;
                displayNewRank(newRank);
                updateColor();
            });
            $rootScope.$on('change.result', function resultChanged(event, newResult) {
                vm.result = newResult;
                updateColor();
            });
        }
        function displayNewRank(rank) {
            var newDisp = rank.abbv + ' (' + rank.mid + ')';
            $rootScope.$broadcast('change.misc', newDisp);
        }
        function updateColor() {
            if(_.isNull(vm.rank)) { console.error('noop'); return; }
            var colorMatch = 'white';
            var ignore = false;
            _.forEach(['white','green','yellow','red'], function checkEachColor(color) {
                if(ignore) return;

                if(_.isArray(vm.rank[color])) {
                    var min = vm.rank[color][0];
                    var max = vm.rank[color][1];

                    if(_.inRange(vm.result, min, max+1)) { // max should be inclusive
                        colorMatch = color;
                        ignore = true; // skips logic for future iterations
                    }
                } else {
                    var rank = vm.rank[color];

                    if(rank === vm.result) {
                        colorMatch = color;
                        ignore = true;
                    }
                }

            });
            $rootScope.$broadcast('change.color', colorMatch);
        }
    }
})();(function() {
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
})();(function () {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlPowerRankController', MvlPowerRankController)
    ;

    MvlPowerRankController.$inject = ['powerRankService', '$rootScope', '_'];
    function MvlPowerRankController(powerRankService, $rootScope, _) {
        var vm = this;

        // Properties
        vm.data = [];
        vm.current = null;
        vm.showing = false;

        // Methods
        vm.changeRank = changeRank;
        vm.show = show;

        activate();

        function activate() {            
            powerRankService
                .getData()
                .then(storeFetchedData)
                .then(setFirstCurrent)
            ;
        }
        function storeFetchedData(data) {
            vm.data = data.data;
            return data;
        }
        function setFirstCurrent() {
            changeRank(0); // defaults to Shift 0
        }
        function changeRank(index) {
            if(_.isNull(vm.current) || !_.isEqual(vm.data[index], vm.current)) {
                vm.current = vm.data[index];
                $rootScope.$broadcast('change.rank', vm.current);
            }
        }
        function show(showIt) {
            if(!_.isUndefined(showIt)){
                vm.showing = showIt;
            }
            vm.showing = !vm.showing;
        }
    }
})(); (function () {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlPowerRanks', mvlPowerRanks)
    ;

    function mvlPowerRanks() {
        var path = 'app/components/mvl-power-ranks';
        var directive = {
            templateUrl: path + '/mvl-power-ranks.html',
            restrict: 'AE',
            controller: 'MvlPowerRankController',
            controllerAs: 'vm',
            bindToController: true,
            scope: {}
        };

        return directive;
    }
})(); (function() {
    'use strict';

    angular
        .module('marvel')
        .filter('buttonVal', buttonVal);

    buttonVal.$inject = ['$sce'];
    function buttonVal($sce) {
        return buttonValFilter;

        function buttonValFilter(value) {
            var val;
            if(isNaN(value)) {
                // backspace or clear
                if(value.toLowerCase() === 'backspace') {
                    // val = $sce.trustAsHtml('&laquo;');
                    val = '&laquo;';
                } else if(value.toLowerCase() === 'clear') {
                    val = 'C';
                } else console.error('Whaaa?');
                val = $sce.trustAsHtml(val);
            } else {
                val = value;
            }

            return val;
            // return $sce.trustAsHtml(val);
        }
    }
})();(function() {
    'use strict';

    angular
        .module('marvel')
        .controller('MvlRollResultController', MvlRollResultController);

    MvlRollResultController.$inject = ['$sce', '_', '$rootScope'];
    /* @ngInject */
    function MvlRollResultController($sce, _, $rootScope) {
        var vm = this;
        
        // Properties
        vm.title = 'MvlRollResultController';
        vm.buttons = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'backspace', 0, 'clear' ];
        vm.result = 0; // updates as user enters values

        // Methods
        vm.updateVal = updateVal;

        activate();
        ////////////////
        function activate() {
            $rootScope.$on('change.misc', changeMisc);
        }
        function changeMisc(event, miscData) {
            vm.resultMisc = miscData;
        }
        function updateVal(value) {
            if(_.isNumber(value)) {
                var newRes = calcNewRes(vm.result, value);
                vm.result = newRes;
            } else if(_.isString(value)) {
                switch(value) {
                    case 'backspace':
                        vm.result = backspcVal(vm.result);
                        break;
                    case 'clear':
                        vm.result = 0;
                        break;
                }
            }
            // change.result broadcasts vm.result
            $rootScope.$broadcast('change.result', vm.result);
            // if string, enter switch
        }
        function calcNewRes(oldRes, newRes) {
            var num = oldRes.toString() + newRes.toString();
            num = (num.substr(0, 1) === '0' && num !== '0') ? num.substring(1) : num;
            return checkRange(num);
        }
        function checkRange(num) {
            return (num < 0)   ? 0   : 
                   (num > 100) ? 100 :
                    num;
        }
        function backspcVal(val) {
            val = (_.isNumber(val)) ? val.toString() : val;
            return val.length === 1 
                ? 0 
                : val.substr(0, val.length - 1);
        }
    }
})();(function() {
    'use strict';

    angular
        .module('marvel')
        .directive('mvlRollResult', mvlRollResult);

    mvlRollResult.$inject = [];
    /* @ngInject */
    function mvlRollResult() {
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