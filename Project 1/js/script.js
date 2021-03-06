"use strict";


//Project 1: ALICE IN JAVALAND
//Huyen Tran Pham

//A game based on a Netflix serie called Alice in Borderland.
//Choose the right door between two doors: Death or Alive
//Goal: Make it out of the building safely
//There is a map that is going to rotate and blurry as the player goes on
//Time limit: 120 seconds for the first room, decrease 10 seconds per room
//Game over when wrong room or time's up

//LET'S START//

//Varible for the title background
let titleImage;

//Variables to contain the death door's objects
let deathDoor;
let deathDoorImage;

//Variables to contain the alive door's objects
let aliveDoor;
let aliveDoorImage;

//A variable for the open song
let openMusic;

//Start the state of the game at 0
let state = 0;

//Set a timer to start from 120
let timer = 120;

//Set the color values of the doors
let value1 = 0;
let value2 = 255;

//Variable for fonts
let firstFont;
let secondFont;

//Typewriter string for opening game title
let openString = 'Welcome to one of the first game in JavaLand';
let openString2 = 'Rule: Choose Death or Alive';
let openString3 = 'Goal: Make your way out of the building';
let openString4 = 'Game over: Wrong door or Time is up!';
let openString5 = 'Press Spacebar to enter the game of Three of Clubs card';
let lastCharacter = 0;

//Description of preload
function preload() {

  //Set the format
  soundFormats('mp3');
  //The opening song
  openMusic = loadSound('assets/sounds/theme-song.mp3');

  //Preload the title background
  titleImage = loadImage(`assets/images/TITLE.png`);

  //Preload the image on the death door
  deathDoorImage = loadImage(`assets/images/death.png`);
  //Preload the image on the death door
  aliveDoorImage = loadImage(`assets/images/alive.png`);

//Preload first font
firstFont = loadFont('assets/fonts/PressStart2P-Regular.ttf');
secondFont = loadFont('assets/fonts/LCDAT&TPhoneTimeDate.ttf');
}



//Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

}


//Description of draw()
function draw() {


  switch(state) {
    case 0:
    gameTitle();
    break;

    case 1:
    roomOne();
    break;

    case 2:
    roomTwo();
    break;

    case 3:
    roomThree();
    break;

    case 4:
    gameEnd();
    break;
  }
}


//gameTitle()
//
//Design the front
function gameTitle() {

  push();

  imageMode(CORNER);
  image(titleImage,0,0,windowWidth,windowHeight);
  textSize(20);
  fill(0);
  textFont(firstFont);
  text(openString.substring(0,lastCharacter),width*0.25,height*0.4);
  text(openString2.substring(0,lastCharacter),width*0.3,height*0.45);
  text(openString3.substring(0,lastCharacter),width*0.3,height*0.5);
  text(openString4.substring(0,lastCharacter),width*0.3,height*0.55);
  text(openString5.substring(0,lastCharacter),width*0.25,height*0.6);

  pop();

lastCharacter += random(0,0.6);
}


//roomOne()
//
//Design room one with two doors and a timer of 90s
function roomOne() {
  push();
  //The walls are all grey
  background(128);
  //Draw a black rectangle for the death door in the middle of the room
  fill(value1);
  rect(width*0.4,height*0.2,160,320);
  image(deathDoorImage,width*0.413,height*0.25,120,120);
  fill(255);
  ellipse(width*0.495,height*0.45, 20, 20);
  textSize(12);
  text("center",width*0.45,height*0.25);


  //Draw a white rectangle for the alive door on the right of the room
  fill(value2);
  rect(width*0.75,height*0.3,180,360);
  image(aliveDoorImage,width*0.763,height*0.35,140,140);
  fill(0);
  ellipse(width*0.86,height*0.6, 20, 20);
  textSize(12);
  text("right",width*0.8,height*0.34);

  pop();

  ////***SET UP THE TIMER***////
  //Source: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  //Styling the font
  textFont(secondFont);
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('TIME:'+timer,100,50);
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    //If the frameCount is divisible by 60, then a second has passed.
    //It will stop at 0
    timer --;
  }
  if (timer == 0) {

    text("GAME OVER", width/2, height/3);
    text("Press 'Enter' to start again", width/2,height/5);
    fill(255);
    rect(0,0,windowWidth,windowHeight);
  }
}


//roomTwo()
//
//Design room two with two doors and a timer of 80s
function roomTwo() {
  push();
  //The walls are all grey
  background(128);
  //Draw a white rectangle for the alive door in the middle of the room
  fill(value2);
  rect(width*0.4,height*0.2,160,320);
  image(aliveDoorImage,width*0.413,height*0.25,120,120);
  //Doorknob
  fill(0);
  ellipse(width*0.495,height*0.45, 20, 20);
  textSize(12);
  text("center",width*0.45,height*0.25);


  //Draw a black rectangle for the death door on the right of the room
  fill(value1);
  rect(width*0.75,height*0.3,180,360);
  image(deathDoorImage,width*0.763,height*0.35,140,140);
  //Doorknob
  fill(255);
  ellipse(width*0.86,height*0.6, 20, 20);
  textSize(12);
  text("right",width*0.8,height*0.34);

  pop();

  ////***SET UP THE TIMER***////
  //Source: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  //Styling the font
    textFont(secondFont);
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('Time:'+timer,100,50);
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    //If the frameCount is divisible by 60, then a second has passed.
    //It will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height/3);
    text("Press 'Enter' to start again", width/2,height/5);
  }
}

//roomOne()
//
//Design room three with two doors and a timer of 90s
function roomThree() {
  push();
  //The walls are all grey
  background(128);
  //Draw a white rectangle for the alive door in the middle of the room
  fill(value2);
  rect(width*0.4,height*0.2,160,320);
  image(aliveDoorImage,width*0.413,height*0.25,120,120);
  //Doorknob
  fill(0);
  ellipse(width*0.495,height*0.45, 20, 20);
  textSize(12);
  text("center",width*0.45,height*0.25);


  //Draw a black rectangle for the alive door on the right of the room
  fill(value1);
  rect(width*0.75,height*0.3,180,360);
  image(deathDoorImage,width*0.763,height*0.35,140,140);
  //Doorknob
  fill(255);
  ellipse(width*0.86,height*0.6, 20, 20);
  textSize(12);
  text("right",width*0.8,height*0.34);

  pop();

  ////***SET UP THE TIMER***////
  //Source: https://editor.p5js.org/marynotari/sketches/S1T2ZTMp-
  //Styling the font
  textFont(secondFont);
  textAlign(CENTER);
  textSize(30);
  //Display the countdown at the top left of the canvas
  text('Time:'+timer,100,50);
  // frameCount: this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // %: this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // This can be used to determine if the number on the left is divisible by the number on the right
  if (frameCount % 60 == 0 && timer > 0) {
    //If the frameCount is divisible by 60, then a second has passed.
    //It will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height/3);
    text("Press 'Enter' to start again", width/2,height/5);
  }
}


//gameEnd()
//
//End the game when wrong door is chosen
function gameEnd(){
  background(0);
  textFont(firstFont);
  fill(255);
  textAlign(CENTER);
  text("GAME OVER", width/2, height/2);
}

//mouseClicked()
//
function mouseClicked() {
 if (value1 === 0 && state === 1) {
  state = 2;
}

 if ( value2 === 255 && state === 2) {
 state === 3;
 }

else  {
  state = 4;
 }
}

//keyPressed()
//
//Control the game with keyboards
function keyPressed() {
  //Press spacebar to start the game
  if (keyCode === 32) {
    state = 1;
  }
}
