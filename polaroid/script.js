function scatterPhotos()
{
    var myArray = document.getElementsByClassName("polaroid");

    for (var i=0; i < myArray.length; i++)
    {
        var posX = Math.floor(Math.random() * 700);
        myArray[i].style.left = posX + "px";

        var posY = Math.floor(Math.random() * 200);
        myArray[i].style.top = posY + "px";

        var rotation = Math.floor(Math.random() * 720) -360;
        myArray[i].style.transform = "rotate(" + rotation + "deg)";
    } 
}

function alignPhotos()
{
    var myArray = document.getElementsByClassName("polaroid");
    
    for (var i=0, k=20; i < myArray.length; i++, k+= 150)
    {
        myArray[i].style.transform = "initial";
        myArray[i].style.left = k + "px";
        myArray[i].style.top = "125px";

        myArray[i].style.transform = "1s ease";
    } 
}

function getInsertPhoto()
{
    const divP = document.createElement("div");
    divP.className = "polaroid";

    const img = document.createElement("img");
    img.src = prompt("Inserisci URL immagine:");
    img.style.width = "100%";
    img.style.height = "100%";

    const divD = document.createElement("div");
    divD.className = "didascalia";
    divD.textContent = prompt("Inserisci didascalia immagine:");

    divP.appendChild(img);
    divP.appendChild(divD);
    document.getElementById("woodenTable").appendChild(divP);
}

async function fetchPolaroidJSON() {
    const response = await fetch('data.json');
    const polaroid = await response.json();

    for(var i=0; i < polaroid.images.length; i++)
    {
        const divPolar = document.createElement("div"); //crea un div
        divPolar.className = "polaroid";

        document.getElementById("woodenTable").appendChild(divPolar);

        const didascaliaDiv = document.createElement("div"); 
        didascaliaDiv.className = "didascalia";
        didascaliaDiv.textContent = polaroid.images[i].didascalia;

        divPolar.appendChild(didascaliaDiv);

        const newImg = document.createElement("img");
        
        newImg.src = polaroid.images[i].url; //assegno url dal json a img
        newImg.style.width = "100%";
        newImg.style.height = "100%";

        divPolar.appendChild(newImg);
    }
    scatterPhotos();
  }


fetchPolaroidJSON();

document.getElementById("uplPh").addEventListener("click", getInsertPhoto);

