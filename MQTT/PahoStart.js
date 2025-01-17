var brokerURL;
var clientID;
var topicName;
var brokerPort;

var client;

document.getElementById("area").value = ""; //pulisci textarea al refresh

function getInputConnect()
{
  brokerURL = document.getElementById("broker").value;
  brokerPort = document.getElementById("port").value;
  clientID = document.getElementById("client").value;
  topicName = document.getElementById("topic").value;

  alert("Data was registered!");
  document.getElementById("broker").value = "";
  document.getElementById("client").value = "";
  document.getElementById("topic").value = "";
  document.getElementById("port").value = "";

  // Create a client instance
  client = new Paho.Client(brokerURL, Number(brokerPort), clientID);

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  // connect the client
  client.connect({onSuccess:onConnect});
}



function sendMessage()
{
  var messagestring = document.getElementById("messageBox").value;

  alert("Message sent!");
  document.getElementById("messageBox").value = "";

  message = new Paho.Message(messagestring);
  message.destinationName = topicName;
  client.send(message);
}


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe(topicName);
  document.getElementById("status").style.backgroundColor = "green";
  document.getElementById("connectButton").value = "Connected!";
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
    document.getElementById("status").style.backgroundColor = "red";
    document.getElementById("connectButton").value = "Connect";
  }
}

// called when a message arrives
function onMessageArrived(message) {
    const messageArea = document.getElementById("area");
    messageArea.value += " Someone says: " + message.payloadString + "\n";
}
