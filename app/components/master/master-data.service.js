(function () {
    angular
        .module('marvel')
        .factory('masterDataService', masterDataService)
    ;

    masterDataService.$inject = ['$http'];
    function masterDataService($http) {
        var service = {
            getData : getData
        };

        return service;

        function getData() {
            return $http({ method:'GET', url:'api/power-ranks.json' })
                .success(saveFetchedData)
                error(fetchFailed)
            ;
        }
        function saveFetchedData(data, status, headers, config) {
            return data;
        }
        function fetchFailed(data, status, headers, config) {
            console.error('%cData not fetched', 'font-weight:bold',
                'data, status, headers, config',
                data, status, headers, config);
        }
    }
})(); 