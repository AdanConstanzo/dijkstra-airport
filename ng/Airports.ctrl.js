angular.module('app').controller('AirportCtrl', function ($scope,AirportSvc) {

    //Check our values
    var set_airports = new Set();
    // our unvisited set.
    var unvisited = new Set();
    // our distance object
    var distance = {};
    // Our Graph
    var graph = new Graph();
    // boolean to check for muliple calls
    $scope.called = false;
    // a button
    var button = document.getElementById("dijk");
    button.disabled = true;

    // object to set key value of IATA and the actual object
    var air = {};
    // our completed object
    var completed = [];
    // This is Google Map Object.
    var map;
    // Object for our markers.
    var markers = {};
    // Array for the lines.
    var lines = [];
    // Airlin Object
    var Airline = {};
    // our input variables
    var getFrom = document.getElementById("from-form");
    var getTo = document.getElementById("to-form");
    // Grabs airports asynchronously.
    AirportSvc.getAirports()
    .then(function(product)
    {
        $scope.Airports = product;
        var lax = {lat:33.942536,lng:-118.408075};
        map = new google.maps.Map(document.getElementById('map'),{
        	zoom:8,
        	center: lax
        });
        var loopLenght = $scope.Airports.length;
        var marker;
        for(var i = 0; i < loopLenght; i++)
        {
            graph.addVertex($scope.Airports[i].IATA);
            air[$scope.Airports[i].IATA] = $scope.Airports[i];
            distance[$scope.Airports[i].IATA] = Number.MAX_VALUE;
            set_airports.add($scope.Airports[i].IATA);
            unvisited.add($scope.Airports[i].IATA);
        	var newMark = {lat: $scope.Airports[i].LAT,lng:$scope.Airports[i].LON};
        	marker = new google.maps.Marker({
        		position:newMark,
        		map:map,
        		title: $scope.Airports[i].IATA
        	});
        	marker.addListener('click',setIATA,false);
            markers[$scope.Airports[i].IATA] = marker;
        }
        
        AirportSvc.getRoutes()
        .then(function(routes)
        {
            for(var i = 0; i < routes.length; i++)
            {
                Airline[routes[i].From+'-'+routes[i].From] = routes[i].Airport;
                graph.addEdge(routes[i].From,routes[i].To,routes[i].Distance);
            }
            
            button.disabled = false;
        })
    });

    
    

    // Set the values of airports
    function setIATA() {
        if(getFrom.value.length == 0 && getTo.value.length == 0)
            getFrom.value = this.title;
        else if ( getFrom.value.length > 0 && getTo.value.length == 0)
            getTo.value = this.title;
	}

    // Dijkstra Algoirthm Caller
    $scope.Dijkstra = function()
    {
        var getFrom = document.getElementById("from-form");
        var getTo = document.getElementById("to-form");
        if(checkValues(getFrom,getTo))
        {
            runDijkstra(getFrom.value,getTo.value);   
        }
        else
        {
            // handle error
        }
    }

    // bool to check whether if not blank 
	function checkValues(from,to)
    {
        var check =false;
        if(from.value.length == 3 && to.value.length == 3)
        {
            for(var i = 0; i < set_airports.length(); i++)
            {
                if(set_airports.at(i) == from.value)
                {
                    check = true;
                    break;
                }
            }
            check = false;
            for(var i = 0; i < set_airports.length(); i++)
            {
                if(set_airports.at(i) == to.value)
                {
                    check = true;
                    break;
                }
            }
        }
        return check;
    }
    function setValue(_IATA,_WEIGHT)
    {
        distance[_IATA] = _WEIGHT;
    }
    function getValue(_IATA)
    {
        return distance[_IATA];
    }

    var runDijkstra = function(from,to)
    {
        
        var previous = {};
        button.disabled = true;
        // Reset Checker.
        if($scope.called)
            resetVariable(unvisited,distance);
        else
            $scope.called = true;

        setValue(from,0);

        while(unvisited.length() > 0)
        {
            var a = getMin();
            if( to == a )
                break;
            unvisited.remove(a);
            var neigh = graph.GetNeigh(a);
            for(var i = 0; i < neigh.length; i++)
            {
                //var rounded = Math.round( number * 10 ) / 10;
                var alt = distance[a] + neigh[i].distance;
                var round = Math.round(alt*10)/10;
                var key = neigh[i].to
                if(round < getValue(key))
                {
                    setValue(key,round);
                    previous[key] = a;
                }
            }

        }
        var S = [];
        var u = to;
        while(true)
        {
            S.unshift(u);
            u = previous[u];
            if(u == undefined)
                break;
        }
        var temp = [];
        for(var i = 0; i < S.length; i++)
        {
            temp.push(air[S[i]]);
        }
        doView(temp);
        button.disabled = false;
        
    }
    // Google's Code
    function setMapOnAll(map) {
        for(var i = 0 ; i < $scope.Airports.length; i++)
        {
            markers[$scope.Airports[i].IATA].setMap(map);
        }
    }
    /*
        Leave LAX (Los Angeles) on American Airways after flying 2,500 miles
        Change planes at ANT (Atlanta) to American Airlines and fly 1,000 miles
    */
    var getDistance = function(from,to)
    {
        var neigh = graph.GetNeigh(from);
        for(var i = 0; i < neigh.length; i++)
        {
            if(neigh[i].to == to)
                return neigh[i]
        }
    }
    var doView = function(air_obj)
    {
        var divResult = document.getElementById("result");
        var lineSymbol = {
          path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
        };
        setMapOnAll(null);

        // loop for text to show

        for(var i = 0; i < air_obj.length; i++)
        {
            var p = document.createElement('p');
            if(i == 0)
            {
                var distance = getDistance(air_obj[i].IATA,air_obj[i+1].IATA);
                var current = "Leave "+air_obj[i].IATA+"("+air_obj[i].Name+") on "+Airline[air_obj[i].IATA+'-'+air_obj[i].IATA]+"  after flying "+distance.distance+" km";
            }
            else if(i == air_obj.length-1)
            {
                var current = "Arrive at "+air_obj[i].IATA+"("+air_obj[i].Name+")";
            }
            else
            {
                var distance = getDistance(air_obj[i].IATA,air_obj[i+1].IATA);
                var current = "Change planes at "+air_obj[i].IATA+"("+air_obj[i].Name+") to "+Airline[air_obj[i].IATA+'-'+air_obj[i].IATA]+" and fly "+distance.distance+" km";
            }

            p.innerHTML+= current;
            divResult.appendChild(p);
        }
        
        // loop for map stuff
        for(var i = 0; i < air_obj.length-1; i++)
        {
            markers[air_obj[i].IATA].setMap(map);
            markers[air_obj[i+1].IATA].setMap(map);
            var line = new google.maps.Polyline({
              path: [ {lat: air_obj[i].LAT, lng: air_obj[i].LON}, {lat: air_obj[i+1].LAT, lng: air_obj[i+1].LON}],
              icons: [{
                icon: lineSymbol,
                offset: '100%'
              }],
              map: map
            });
            lines.push(line);

        }
    }
    // Get Min Function that returns the lowest value.
    var getMin = function()
    {
        var currentMin = distance[unvisited.at(0)];
        var currentKey;

        for(var i = 0; i < unvisited.length(); i++)
        {
            if(distance[unvisited.at(i)] <= currentMin)
            {
                currentMin = distance[unvisited.at(i)]
                currentKey = unvisited.at(i);
            }
        }
        return currentKey;
    }

    // Resets are variables.
    var resetVariable = function(_unvisited,_distance)
    {
        _unvisited = new Set();
        _distance = {};
        for(var i = 0; i < $scope.Airports.length; i++)
        {
            distance[$scope.Airports[i].IATA] = Number.MAX_VALUE;
            unvisited.add($scope.Airports[i].IATA);
        }
    }

    $scope.clickRepeat = function()
    {
        for(var i = 0; i < lines.length; i++)
        {
            lines[i].setMap(null);
        }
        setMapOnAll(map);
        getTo.value = "";
        getFrom.value = "";
        var div = document.getElementById("result");
        while (div.hasChildNodes()) {
            div.removeChild(div.lastChild);
        }
    }

    //==========
    // A Graph 
    //==========
    function Graph() {
      this.vertices = [];
      this.edges = [];
      this.numberOfEdges = 0;
    }
    Graph.prototype.addVertex = function(vertex) {
        if(this.vertices.indexOf(vertex) == -1)
        {
            this.vertices.push(vertex);
            this.edges[vertex] = [];
        }        
    };
    Graph.prototype.addEdge = function(vertex1, vertex2, _d) {
        var temp = {to:vertex2, distance: _d};
        this.edges[vertex1].push(temp);
        this.numberOfEdges++;
    };
    Graph.prototype.size = function() {
      return this.vertices.length;
    };
    Graph.prototype.GetNeigh = function(vertex)
    {
        return this.edges[vertex];
    }


    
    

    //=========
    // Our Set
    //=========
    function Set() {
      this.values = [];
      this.numberOfValues = 0;
    }
    Set.prototype.at = function(value)
    {
        return this.values[value];
    }
    Set.prototype.add = function(value) {
      if(!~this.values.indexOf(value)) {
        this.values.push(value);
        this.numberOfValues++;
      }
    };
    Set.prototype.remove = function(value) {
      var index = this.values.indexOf(value);
      if(~index) {
        this.values.splice(index, 1);
        this.numberOfValues--;
      }
    };
    Set.prototype.length = function() {
      return this.numberOfValues;
    };
    
    // Asign an object a key and value.
    function assignObject(obj, keyPath, value) {
       lastKeyIndex = keyPath.length-1;
       for (var i = 0; i < lastKeyIndex; ++ i) {
         key = keyPath[i];
         if (!(key in obj))
           obj[key] = {}
         obj = obj[key];
       }
       obj[keyPath[lastKeyIndex]] = value;
    }

});
