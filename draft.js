var moviebut = document.getElementById("movie");
var mangabut = document.getElementById("manga");
var animebut= document.getElementById("anime");
var foodbut= document.getElementById("food");

var p1=document.getElementById("p1").value;
var p2=document.getElementById("p2").value;

document.getElementById("start-button").style.visibility= "visible";

document.getElementById("start-button").addEventListener("click", function abcd(){
    
    const p1=document.getElementById("p1").value;
    const p2=document.getElementById("p2").value;

    const mode = document.querySelector('input[name="choose"]:checked').id;
    document.getElementById("check").innerHTML= "player 1 is: " + p1 + " and player 2 is: " + p2 + "mode selecetd is : " + mode ;
    document.getElementById("start-button").style.visibility= "hidden";

    if (mode=="movie"){
        window.location.href="movie.html";

    }

    else if(mode=="manga"){
        window.location.href="manga.html"
    }
    else if (mode=="anime"){
        window.location.href="anime.html"
    }
    else{
        window.location.href="food.html"
    }
});

