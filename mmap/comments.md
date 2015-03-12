/*
	    function mymap(myLat, myLng){
	    	//my location is set in longitude and latitude
	    	var me = new google.maps.LatLng(myLat, myLng);
	    	var landmark = new google.maps.LatLng(42.3599611, -71.0567528);
    		//createmarker("faneuli",42.3599611, -71.0567528);	

    		// Set up Google Map
			var mapOptions = {
	          	zoom: 10,
	          	center: me,
	          	mapTypeId: google.maps.MapTypeId.ROADMAP
	        };

	        // Create the map_canvas
	        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

	        var infowindow = new google.maps.InfoWindow();

	        placemarker(me, "I am here", map, infowindow);
	        placemarker(landmark, "faneuil", map, infowindow);

			console.log("5. I placed a marker for myself");

	        
			
			
	        /*var landmark = new google.maps.LatLng(42.3599611, -71.0567528);	
			console.log("6. I created a landmark");

			//Create a marker (faneuil)
	        	marker = new google.maps.Marker({
	        	position: landmark,
	        	title: "landmark"
	        });
*/

	    
	  /*	function createmarker(login, otherLat, otherLng){
	  		var landmark = new google.maps.LatLng(otherLat, otherLng);	

	  		//Create a marker
	        var marker = new google.maps.Marker({
	        	position: landmark,
	        	title: login
	        });



	  	}*/


	  /*	function placemarker(me, login, map, infowindow){

	  		//Create a marker
	        var marker = new google.maps.Marker({
	        	position: me,
	        	title: login
	        });

	        //Create info window for the marker
	        marker.setMap(map);
	       
	        
	        console.log("6. Right before placing a marker for myself");

			google.maps.event.addListener(marker, 'click', function(){
	        	infowindow.setContent(marker.title);
	        	infowindow.open(map, marker);
	        });
	  	} */ 