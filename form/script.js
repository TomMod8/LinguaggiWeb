async function makeGET(URL) {
    const response = await fetch(URL, {mode:"no-cors"});
    //aggiunta secondo parametro a fetch per evitare errori CORS
}

function confirmData()
{
    var firstName = document.getElementById("firstNJS").value;
    var lastName = document.getElementById("lastNJS").value;
    const baseURL = "https://webhook.site/514f908a-5272-4a40-96aa-8a8be86cb021";

    var fullURL = (baseURL + "?" + "fname=" + firstName + "&lname=" + lastName);
    
    makeGET(fullURL);

    document.getElementById("firstNJS").value = "";
    document.getElementById("lastNJS").value = "";
    //svuoto campi dopo click
}

function saveLocal()
{
    var firstName = document.getElementById("firstNBottom").value;
    var lastName = document.getElementById("lastNBottom").value;

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    //setto la variabile inserita nei campi nella memoria del browser

    document.getElementById("firstNBottom").value = "";
    document.getElementById("lastNBottom").value = "";
    //svuoto campi dopo averli salvati sul browser
}

function welcomeBack()
{   
    var firstName = localStorage.getItem("firstName") || "";
    var lastName = localStorage.getItem("lastName") || "";
    // || check se è nullo, uguale a if ... != null

    if(firstName=="" && lastName=="")
    {
        alert("Welcome!");
    }
    else
    {
        alert("Welcome! Last local user name is: " + firstName + "!");
        var answer = prompt("Is that you? Y/N");
        if(answer=="y" || answer=="Y") alert("Welcome back " + firstName + "!");
            else alert("Logging off...");
    }
}


