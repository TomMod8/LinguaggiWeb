/*
-----------------------------------------------------------------------------------
va implementata una generazione coppia coppia in modo da non lasciare tessere sfuse
-----------------------------------------------------------------------------------
*/


//classe per definire gli oggetti MemoryCard
class MemoryCard {
    constructor(imageUrl, imageID) {
        this.imageUrl = imageUrl;
        this.imageID = imageID;
    }

    printCard()
    {
        const flipBox = document.createElement("div");
        flipBox.setAttribute("class", "flip-box");

        const flipBoxInner = document.createElement("div");
        flipBoxInner.setAttribute("class", "flip-box-inner");
        flipBox.appendChild(flipBoxInner);

        const flipBoxFront = document.createElement("div");
        flipBoxFront.setAttribute("class", "flip-box-front");
        flipBoxInner.appendChild(flipBoxFront);

        const flipBoxBack = document.createElement("div");
        flipBoxBack.setAttribute("class", "flip-box-back");
        flipBoxBack.style.backgroundImage = "url(" + this.imageUrl + ")";
        flipBoxInner.appendChild(flipBoxBack);

        flipBoxInner.setAttribute("id", this.imageID);
 
        return flipBox;
    }

    rotateCard()
    {
        document.getElementById(this.imageID).style.transform = "rotateY(180deg)";
    }

    revertRotation()
    {
        document.getElementById(this.imageID).style.transform = "rotateY(0deg)";
    }
}

const gameDiv = document.createElement("div");
gameDiv.setAttribute("id", "gamediv");

let lastClick = null;
let previousClick = null;

const cardsCollection = [];

let cardsDictionary = [];

    cardsDictionary.push({
        key:   "/cards/pepe.jpg",
        value: "pepe"
    });
    cardsDictionary.push({
        key:   "/cards/alien.jpg",
        value: "alin"
    });
    cardsDictionary.push({
        key:   "/cards/nugget.jpg",
        value: "nugt"
    });
    cardsDictionary.push({
        key:   "/cards/troll.jpg",
        value: "trll"
    });
    cardsDictionary.push({
        key:   "/cards/yap.jpg",
        value: "yapd"
    });
    cardsDictionary.push({
        key:   "/cards/bird.jpg",
        value: "bird"
    });

for(let i=0; i < 12; i++) //genero 12 tessere ovvero 12 oggetti e li metto in un array
{
    let k = Math.floor(Math.random() * cardsDictionary.length);

    const card = new MemoryCard(cardsDictionary[k].key, cardsDictionary[k].value + i); 
    cardsCollection.push(card);
    //id univoco con + i
    //va implementata una generazione coppia coppia in modo da non lasciare tessere sfuse

    gameDiv.appendChild(card.printCard());
}    

//funzione principale gioco
function startGame()
{
    document.getElementById("backgroundcards").remove();
    document.getElementById("startbutton").remove();

    document.body.appendChild(gameDiv);

    document.getElementById("beg").innerText = "Do not cheat through page inspect, thanks!"

    let pointEvents = document.getElementsByClassName("flip-box-inner");

    for(let i=0; i < pointEvents.length; i++)
    {
        pointEvents[i].addEventListener("click", rotateAndCheck);
    }
    //il ciclo piazza un event listener su tutte le card
   
}       

//ruota al click
//check se le card ruotate sono uguali sfruttando l'id
function rotateAndCheck()
{
    previousClick = lastClick;
    lastClick = this.id;  //utilizzo this. per ottenere id dell'elemento cliccato

    const currentClickedCard = cardsCollection.find(card => card.imageID === lastClick);
    const previousClickedCard = cardsCollection.find(card => card.imageID === previousClick);   

    if (currentClickedCard) {
        currentClickedCard.rotateCard(); 
    } // ruota solo la card cliccata
    
    if(previousClick!= null && lastClick!=null)
    {
        let idRoot1 = String(previousClick).substring(0,4);
        let idRoot2 = String(lastClick).substring(0,4);

        if(idRoot1!=idRoot2)
            {
                setTimeout(() => currentClickedCard.revertRotation(), 1000);
                setTimeout(() => previousClickedCard.revertRotation(), 1000);

                previousClick = null;
                lastClick = null;   
            }
            else
            {
                previousClick = null;
                lastClick = null; 

                document.getElementById(lastClick).removeEventListener("click", rotateAndCheck);
                document.getElementById(previousClick).removeEventListener("click", rotateAndCheck);
            }
    }
}

/* CARD DIV STRUCTURE

<div class="flip-box">
    <div class="flip-box-inner">
        <div class="flip-box-front">
        </div>
        <div class="flip-box-back"> IMAGE HERE
        </div>
    </div>
</div>

*/
