var colors = colorGenerator(6);
var squares = document.querySelectorAll(".square");
var chosenColor = colors[chooseColor()];
var message = document.getElementById("message");
var reset = document.querySelector("#reset");
var colorDisplay = document.getElementById("colorDisplay");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var hardMode = true;

easy.addEventListener("click", function(){

    hardMode = false;
    document.querySelector("h1").style.backgroundColor = "#008080";
    message.textContent = "Choose One";

    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = colorGenerator(3);
    chosenColor = colors[chooseColor()];
    colorDisplay.textContent = chosenColor;

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];

        } else {
            squares[i].style.display = "none";
        }
    }


});
hard.addEventListener("click", function(){

    hardMode = true;
    document.querySelector("h1").style.backgroundColor = "#008080";
    message.textContent = "Choose One";

    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = colorGenerator(6);
    chosenColor = colors[chooseColor()];
    colorDisplay.textContent = chosenColor;

    //newGame();
     for (var i = 0; i < squares.length; i++) {
    //     //if (colors[i]) {
         squares[i].style.backgroundColor = colors[i];
         squares[i].style.display = "block";

       // } else {
            //squares[i].style.display = "none";
       // }
    }

});


reset.addEventListener("click", function(){

    if (hardMode) {
        colors = colorGenerator(6);

    }
    else{
        colors = colorGenerator(3);

    }

    chosenColor = colors[chooseColor()];
    colorDisplay.textContent = chosenColor;
    newGame();

});
//reset.addEventListener("click", function(){
    //colors = colorGenerator(6);
    //chosenColor = colors[chooseColor()];

//});

colorDisplay.textContent = chosenColor;

newGame();

function newGame(){

document.querySelector("h1").style.backgroundColor = "#008080";
message.textContent = "Choose One";

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
    if (this.style.backgroundColor == chosenColor) {
        message.textContent = "Correct!";
        changeColors();

    }
    else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
    }
});
}
}

function changeColors(){
for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = chosenColor;

}
document.querySelector("h1").style.backgroundColor = chosenColor;

}

function chooseColor(){
    return Math.floor(Math.random() * colors.length);
}

function colorGenerator(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        return "rgb(" + r + ", " + g + ", " + b + ")";

}