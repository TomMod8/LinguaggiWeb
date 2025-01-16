
function getInputConnect()
{
  var brokerURL = document.getElementById("broker").value;
  var clientID = document.getElementById("client").value;
  var topicName = document.getElementById("topic").value;

  alert("Data was registered!");
  document.getElementById("broker").value = "";
  document.getElementById("client").value = "";
  document.getElementById("topic").value = "";

  // Create a client instance
  var client = new Paho.Client(brokerURL, Number(8080), clientID);

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;

  // connect the client
  client.connect({onSuccess:onConnect});

  client.subscribe(topicName);

}

function sendMessage()
{
  var messagestring = document.getElementById("messageBox").value;

  alert("Message sent!");
  document.getElementById("messageBox").value = "";

  message = new Paho.Message(messagestring);   //rivedi accesso a  topic name + client. va rifatto
  message.destinationName = topicName;
  client.send(message);
}


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
    const messageArea = document.getElementById("area");
    messageArea.value += message.payloadString + "\n";
}
