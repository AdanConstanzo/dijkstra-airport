angular.module('app').service('AirportSvc', function ($http) {

    var svc = this;
    svc.getAirports = function()
    {   
    	return $http.get('/api/airports/')
    	.then(function(response){
    		return response.data;
    	});
    }

    svc.getRoutes = function()
    {
    	return $http.get('/api/routes/')
        .then(function(response){
            return response.data;
        })
    }

    svc.getOneAirport = function(IATA)
    {
        return $http.get('/api/airports/'+IATA)
        .then(function(response){
            return response.data;
        })
    }
});
