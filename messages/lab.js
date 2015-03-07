// Your JavaScript goes here...

function parse(){
    var request;
    request = new XMLHttpRequst();
    
    request.readyState();

    request.send();

    if (request.readyState() == 4){
	messagesDiv = document.getElementById( "messages");
	converted = JSON.parese(request.responseText);   
	for(i= 0; i <converted.length; i++){
	    messagesDiv.innerHTML += "<p>" + converted[i]["content"];
	    }
    }


}