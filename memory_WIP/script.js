/*

<div class="flip-box">
    <div class="flip-box-inner">
        <div class="flip-box-front">
        </div>
        <div class="flip-box-back">
        </div>
    </div>
</div>

*/

const gameDiv = document.createElement("div");
gameDiv.setAttribute("id", "gamediv");

function startGame() //grid 4x3 ?
{
    document.getElementById("backgroundcards").remove();
    document.getElementById("startbutton").remove();

    document.body.appendChild(gameDiv);

    spawnCards();
}

function spawnCards()
{

}