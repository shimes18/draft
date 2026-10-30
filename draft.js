

var moviebut = document.getElementById("movie");
var mangabut = document.getElementById("manga");
var animebut= document.getElementById("anime");
var foodbut= document.getElementById("tv");


document.getElementById("start-button").style.visibility= "visible";

document.getElementById("start-button").addEventListener("click", function abcd(){
    
    const p1=document.getElementById("p1").value;
    const p2=document.getElementById("p2").value;

    localStorage.setItem("p1o",p1);
    localStorage.setItem("p2o",p2);


    const mode = document.querySelector('input[name="choose"]:checked').id;
    document.getElementById("check").innerHTML= "player 1 is: " + p1 + " and player 2 is: " + p2 + "mode selecetd is : " + mode ;

    if (mode=="movie"){
        window.location.href="https://shimes18.github.io/draft/movie.html";

    }

    else if(mode=="manga"){
        window.location.href="https://shimes18.github.io/draft/manga.html"
    }
    else if (mode=="anime"){
        window.location.href="https://shimes18.github.io/draft/anime.html"
    }
    else{
        window.location.href="https://shimes18.github.io/draft/tv.html"
    }
});

document.getElementById("manga").addEventListener("change", function(){
    if (this.checked){
        document.getElementById("home").style.backgroundImage = "url('images/mangabg.jpg')"
    }
})
document.getElementById("tv").addEventListener("change", function(){
    if (this.checked){
        document.getElementById("home").style.backgroundImage = "url('images/tvbg.jpg')"
    }
})
document.getElementById("anime").addEventListener("change", function(){
    if (this.checked){
        document.getElementById("home").style.backgroundImage = "url('images/animebg.jpg')"
    }
})


document.getElementById("movie").addEventListener("change", function(){
    if (this.checked){
        document.getElementById("home").style.backgroundImage = "url('images/moviebg.webp')"
    }
})