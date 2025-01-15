
var firstName = document.getElementById("firstN");
var lastName = document.getElementById("lastN");

var webhookURL = "https://webhook.site/514f908a-5272-4a40-96aa-8a8be86cb021";


async function fetchRequest()
{
    const response = await fetch('data.json');
    const fullName = await response.json();

}
