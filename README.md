# dijkstra-airport
This is a data structure final project for Pasadena City College CS 8. 
The project's requirements were to create a weighted graph structure that can support over 66k unique routes and 22 k airports. 
From there we use Dijkstra's algorithm to find the shortest path between airports.


Project DB Terminal Commands to import database.

mongorestore -d djkstra -c Airports airports.bson

mongorestore -d djkstra -c Routes routes.bson
