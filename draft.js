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
        const movie_array=["Dirty Dancing","12 Angry Men","Girl,Interrupted","The silence of the lambs", "The Good The Bad & The Ugly", "The Holdovers", "The Goodfellas", "Dead Poets Society", "Perfect Blue", "Spirited Away", "Babylon", "Starwars: Revenge of the Sith", "Mulholland drive", "The Conjuring", "Spider-Man: Across the Spider-Verse", "Eternal Sunshine of the spotless mind", "The Batman", "Titanic", "The Shining", "Avatar", "Blade Runner 2049"]
        const points_array=[3.8,4.6,4.0,4.3,4.5,4.3,4.5,4.4,4.4,4.4,3.9,4.1,4.3,3.6,4.4,4.2,4.1,3.8,4.2,3.8,4.1]
       
        document.getElementById("draw-button").addEventListener("click",function drawfunc(){
            i = Math.floor(Math.random()*21);
            document.getElementById("check").innerHTML = movie_array[i];
            alert("hi");
        });

        document.getElementById("home-draw").style.visibility= "hidden";
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
})