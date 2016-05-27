(function () {
    angular
        .module('marvel')
        .factory('powerRankService', powerRankService)
    ;

    powerRankService.$inject = ['$http'];
    function powerRankService($http) {
        var service = {
            getData : getData
        };

        return service;

        /**
         * [getData description]
         * @return {[type]} [description]
         * @method
         */
        function getData() {
            return $http({ method:'GET', url:'api/power-ranks.json' })
                .success(saveFetchedData)
                error(fetchFailed)
            ;
        }
        /**
         * @internal
         */
        function saveFetchedData(data, status, headers, config) {
            return data;
        }
        /**
         * @internal
         */
        function fetchFailed(data, status, headers, config) {
            console.error('%cData not fetched', 'font-weight:bold',
                'data, status, headers, config',
                data, status, headers, config);
        }
    }
})();