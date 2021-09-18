//console.log("test")
let images = Array.from(document.getElementsByClassName('display-image'));

let score = 0; //Also works: score=0; var score=0;
let correctCup; //define variable
let lives = 2;
let win = false;

function restartGame(){ //function definition
    //console.log("test")
//1- reset all images
for( let i=0; i<images.length; i++){
    document.getElementById(i+1).src = 'images/cup.jpg'}
//2- reset game vriables
win = false;
lives = 2;
//3- new random number
guessRandom();
}

function correctAction(){
//1- change cup image into marble image 
    document.getElementById(correctCup).src = 'images/marble.jpg'
//2- increase score
    score++ //score += 5 or score = score+5  
    //console.log(score)  
    document.getElementById("scoreValue").innerHTML = score 
//3- update win value
    win = true;
}

function wrongAction(index){
//1- change cup image into X image
    document.getElementById(index).src = "images/wrong.jpg"
//2- decrease number of lives
    lives--; 
    //console.log(lives)
}

 
//Step1: Get Random Number
function guessRandom(){
    correctCup = Math.ceil(Math.random()*5 )    //Math is a library; multiply by max number = 5; ceil = round;
    console.log(correctCup)
}
guessRandom()

//Step2: Link every image with a clickable action 
/*1-*/  // let images = document.getElementsByClassName('display-image')
/*2-*/  //let images = Array.from(document.getElementsByClassName('display-image')) //put images in an array

//console.log(images)

for( let i=0; i<images.length; i++){
    images[i].addEventListener('click', function(){ //instead of adding onClick on each image
        if(lives != 0 && win == false){

            if(correctCup == (i+1)){
            console.log("Correct")
            correctAction();}
            else{
            console.log("Wrong")
            wrongAction(i+1);}
    }})  
}
