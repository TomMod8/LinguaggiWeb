async function makeGET(URL) {
    const response = await fetch(URL, {mode:"no-cors"});
    //aggiunta secondo parametro a fetch per evitare errori
}

function confirmData()
{
    var firstName = document.getElementById("firstNJS").value;
    var lastName = document.getElementById("lastNJS").value;
    const baseURL = "https://webhook.site/514f908a-5272-4a40-96aa-8a8be86cb021";

    var fullURL = (baseURL + "?" + "fname=" + firstName + "&lname=" + lastName);
    
    makeGET(fullURL);
}


