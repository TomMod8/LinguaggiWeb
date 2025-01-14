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
    
    for (var i=0, k=75; i < myArray.length; i++, k+= 200)
    {
        myArray[i].style.transform = "initial";
        myArray[i].style.left = k + "px";
        myArray[i].style.top = "125px";

        myArray[i].style.transform = "1s ease";
    } 
}

scatterPhotos();

