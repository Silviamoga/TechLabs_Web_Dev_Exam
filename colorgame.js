var numSquares = 6;
var colors = [ 
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",    
    "rgb(255, 225, 0)",    
    "rgb(255, 0, 255)",    
    "rgb(0, 255, 255)",    
    "rgb(0, 255, 0)"
];
var pickedColor = colors[3];
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");


for (i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function () {
            
            var clickedColor = this.style.backgroundColor;
            if(pickedColor === clickedColor) {
                alert("You are good at guessing!");
                reset();
                         }
            else {
                this.style.backgroundColor = "#232323";
                alert("Wrong Choice!");         }    
                        
            })

}; 

function randomColor() {
    var random1 = Math.floor(Math.random() * 255);
    var random2 = Math.floor(Math.random() * 255);
    var random3 = Math.floor(Math.random() * 255);
    var newColor = 'rgb(' + random1 + ',' + random2 + ',' + random3 + ')';
    return newColor;
}

function colorNumber(){
    return Math.floor(Math.random() * 6);
}

function reset() { 
    for (i=0; i<colors.length; i++) {
         colors[i] = randomColor(); 
    }; 
    colors[colorNumber()] = "rgb(255, 0, 255)"; 
    for (i=0; i<squares.length; i++) {
            squares[i].style.backgroundColor = colors[i];
    }; 
    
 }


                  