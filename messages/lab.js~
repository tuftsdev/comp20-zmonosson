// Your JavaScript goes here...

function parse(){
    var request;
    request = new XMLHttpRequst();

    request.open("GET", "data.json", true);

    request.onreadystatechange() = parseData();

    request.send();

}

function parseData(){

    if (request.readyState() == 4){
	messagesDiv = document.getElementById( "messages");
	converted = JSON.parse(request.responseText);   
	for(i= 0; i <converted.length; i++){
	    messagesDiv.innerHTML += "<p>" + converted[i]["content"];
	    }
    }else if (request.readyState == 4 && request.status == 304){
	alert("no data changed");
    }
}