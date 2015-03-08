// Your JavaScript goes here...

function parse(){

    request = new XMLHttpRequest();

    request.open("GET", "data.json", true);

    request.onreadystatechange = parseData;

    request.send();

}

function parseData(){

    if (request.readyState == 4){
	
	var messagesDiv = document.getElementById( "messages");
	
	var converted = JSON.parse(request.responseText);   
	
	for(i= 0; i <converted.length; i++){
	    messagesDiv.innerHTML += "<p>" + converted[i]["content"];
	    
	} //else if (request.readyState == 4 && request.status == 304){
	// alert("no data changed");
   }
}