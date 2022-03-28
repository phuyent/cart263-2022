"use strict";

//Project 2 prototype : THE CODED MULTIDISCIPLINARY GALLERY
//Huyen Tran Pham
//A virtual space for art of various forms

//An variable for the title image
let titleImage;
//An variable for the end image
let endImage;
//An variable for changing room,start at the title room
let room = 0;
//Variables for pictures in room one
let roomOneImage1;
let roomOneImage2;
let roomOneImage3;
let roomOneImage4;
let roomOneImage5;
let roomOneImage6;

//Variable for wall and pictures in room two
let wallBackground2;
let roomTwoImage1;
let roomTwoImage2;
let roomTwoImage3;
let roomTwoImage4;
let roomTwoImage5;
let roomTwoImage6;

//Variable for wall and pictures in room three
let roomThreeBackground;

//Variable for fortune-telling in room 3
let fortuneData = undefined;
let fortune = `No fortune found yet...`;

//Variables for sounds
let roomTwoMusic;
let roomThreeMusic;



//Variable for facing wall in the room
let wall = 0;

//Description of preload
function preload() {
  //Preload the title background
  titleImage = loadImage(`assets/images/front-title.png`);

  //Preload the end background
  endImage = loadImage(`assets/images/back-end.png`);

  //Preload all pictures in roomOne
  roomOneImage1 = loadImage(`assets/images/photos-rooms/room1/modern1.JPG`);
  roomOneImage2 = loadImage(`assets/images/photos-rooms/room1/modern2.JPG`);
  roomOneImage3 = loadImage(`assets/images/photos-rooms/room1/modern3.JPG`);
  roomOneImage4 = loadImage(`assets/images/photos-rooms/room1/modern4.JPG`);
  roomOneImage5 = loadImage(`assets/images/photos-rooms/room1/modern5.JPG`);
  roomOneImage6 = loadImage(`assets/images/photos-rooms/room1/modern6.JPG`);

//Preload pictures in roomTwo
wallBackground2 = loadImage(`assets/images/photos-rooms/room2/wall.JPG`);
roomTwoImage1 = loadImage(`assets/images/photos-rooms/room2/RE1.png`);
roomTwoImage2 = loadImage(`assets/images/photos-rooms/room2/RE2.png`);
roomTwoImage3 = loadImage(`assets/images/photos-rooms/room2/RE3.png`);
roomTwoImage4 = loadImage(`assets/images/photos-rooms/room2/RE4.png`);
roomTwoImage5 = loadImage(`assets/images/photos-rooms/room2/RE5.png`);
roomTwoImage6 = loadImage(`assets/images/photos-rooms/room2/RE6.png`);

//Preload pictures in roomThree
roomThreeBackground = loadImage(`assets/images/photos-rooms/room3/star1.jpg`);
//Preload JSON data
fortuneData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);

//Preload all the sound files
roomTwoMusic = new Audio('assets/sounds/Vivaldi.mp3');
roomThreeMusic = new Audio('assets/sounds/Meditation.mp3');

}

//Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

}


//Description of draw()
function draw() {
  switch (room) {
    case 0:
    title();
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

  }
}


//title()
//
//Design the front
function title() {

  push();
  imageMode(CORNER);
  image(titleImage,0,0,windowWidth,windowHeight);
  textFont("Times New Roman");
  textSize(40);
  text("THE CODED \nMULTIDISCIPLINARY GALLERY",width*0.56,height*0.3);
  textSize(20);
  fill(0);
  text("Huyen Tran Pham",width*0.56,height*0.6);
  text("Click to move around in the gallery",width*0.56,height*0.65);
  pop();

}
//roomOne()
//
//Create a main wall and use lines to create 3D dimensions
function roomOne() {
  switch (wall) {
    case 0:
    centerWall();
    break;

    case 1:
    leftWall();
    break;

    case 2:
    rightWall();
    break;
  }
  function centerWall() {
    push();
    //Display photos
    imageMode(CORNER);
    image(roomOneImage1,850,100,400,500);
    image(roomOneImage2,400,100,400,500);
    //Main wall
    noFill();
    rectMode(CENTER);
    rect(width/2,height*0.5,950,600);
    //Frames
    rectMode(CORNER);
    strokeWeight(6);
    rect(850,100,400,500);
    rect(400,100,400,500);
    //Side walls
    strokeWeight(1);
    line(325,80,10,0,0,0);
    line(325,680,60,790,1500,10);
    line(1275,80,1500,0,800,1000);
    line(1275,679,1500,750,2000,1500);
    stroke(255);

    //Some text to navigate
    textSize(20);
    fill(0);
    text("Use LEFT ARROW & RIGHT ARROW to move between walls",width*0.35,height*0.95);

    pop();

    }
    function leftWall() {
      push();
      //Display photos
      imageMode(CORNER);
      image(roomOneImage3,850,100,400,500);
      image(roomOneImage4,400,100,400,500);
      //Main wall
      noFill();
      rectMode(CENTER);
      rect(width/2,height*0.5,950,600);

      //Side walls
      strokeWeight(1);
      line(325,80,10,0,0,0);
      line(325,680,60,790,1500,10);
      line(1275,80,1500,0,800,1000);
      line(1275,679,1500,750,2000,1500);
      stroke(255);

      pop();
    }
    function rightWall() {
      push();
      //Display photos
      imageMode(CORNER);
      image(roomOneImage5,850,100,400,500);
      image(roomOneImage6,400,100,400,500);
      //Main wall
      noFill();
      rectMode(CENTER);
      rect(width/2,height*0.5,950,600);
      //Frames
      rectMode(CORNER);
      strokeWeight(6);
      rect(850,100,400,500);
      rect(400,100,400,500);
      //Side walls
      strokeWeight(1);
      line(325,80,10,0,0,0);
      line(325,680,60,790,1500,10);
      line(1275,80,1500,0,800,1000);
      line(1275,679,1500,750,2000,1500);
      stroke(255);

      pop();
    }
  }


//roomTwo()
//
//Create a main wall and use lines to create 3D dimensions
function roomTwo() {

  //Play music
  roomTwoMusic.play();

  switch (wall) {
    case 0:
    centerWall();
    break;

    case 1:
    leftWall();
    break;

    case 2:
    rightWall();
    break;

  }

  function centerWall() {
    push();
    imageMode(CORNER);
    //Display the wall behind
    image(wallBackground2,0,0,windowWidth,windowHeight);
    //Display photos
    image(roomTwoImage1,965,150,300,400);
    image(roomTwoImage2,350,150,600,400);
    //Frames
    push();
    noFill();
    rectMode(CORNER);
    strokeWeight(6);
    stroke(217,173,0)
    rect(965,150,300,400);
    rect(350,150,600,400);
    pop();

    //Main wall
    noFill();
    rectMode(CENTER);
    rect(width/2,height*0.5,950,600);
    //Side walls
    line(325,80,10,0,0,0);
    line(325,680,60,790,1500,10);
    line(1275,80,1500,0,800,1000);
    line(1275,679,1500,750,2000,1500);
    stroke(255);
    pop();
    //Some text to navigate
    textSize(20);
    fill(0);
    text("Use LEFT ARROW & RIGHT ARROW to move between walls",width*0.35,height*0.95);
    //Notes under paintings
    textSize(15);
    fill(0);
    stroke(255);
    text("Mona Lisa \nby Leonardo Da Vinci",965,580);
    text("Primavera (Allegory of Spring)\nby Sandro Botticelli (Alessandro di Mariano Filipepi) ",350,580);
    }
    function leftWall() {
      push();
      imageMode(CORNER);
      //Display the wall behind
      image(wallBackground2,0,0,windowWidth,windowHeight);
      //Display photos
      imageMode(CORNER);
      image(roomTwoImage3,850,200,400,200);
      image(roomTwoImage4,400,200,400,250);
      //Main wall
      noFill();
      rectMode(CENTER);
      rect(width/2,height*0.5,950,600);
      //Frames
      push();
      noFill();
      rectMode(CORNER);
      strokeWeight(6);
      stroke(217,173,0)
      rect(850,200,400,200);
      rect(400,200,400,250);
      pop();
      //Side walls
      strokeWeight(1);
      line(325,80,10,0,0,0);
      line(325,680,60,790,1500,10);
      line(1275,80,1500,0,800,1000);
      line(1275,679,1500,750,2000,1500);
      stroke(255);
      //Notes under paintings
      textSize(15);
      fill(0);
      text("The Creation of Adam \nMichelangelo Buonarroti",850,420);
      text("The Last Supper \nby Leonardo Da Vinci ",400,470);
      pop();
    }
    function rightWall() {
      push();
      imageMode(CORNER);
      //Display the wall behind
      image(wallBackground2,0,0,windowWidth,windowHeight);
      //Display photos
      imageMode(CORNER);
      image(roomTwoImage5,850,150,400,400);
      image(roomTwoImage6,400,150,400,300);
      //Main wall
      noFill();
      rectMode(CENTER);
      rect(width/2,height*0.5,950,600);
      //Frames
      push();
      noFill();
      rectMode(CORNER);
      strokeWeight(6);
      stroke(217,173,0)
      rect(850,150,400,400);
      rect(400,150,400,300);
      pop();
      //Side walls
      strokeWeight(1);
      line(325,80,10,0,0,0);
      line(325,680,60,790,1500,10);
      line(1275,80,1500,0,800,1000);
      line(1275,679,1500,750,2000,1500);
      stroke(255);
      //Notes under paintings
      textSize(15);
      fill(0);
      text("The School of Athens \nRaphael",850,570);
      text("The Kiss of Judas \nby Giotto di Bondone ",400,470);
      pop();

    }

}

//roomThree
//
//Create a peaceful space with some fortune-telling
function roomThree() {
  //Play music
  roomTwoMusic.pause();
  roomThreeMusic.play();
  //Background
  imageMode(CORNER);
  //Display the wall behind
  image(roomThreeBackground,0,0,windowWidth,windowHeight);

  //Text setting for predictions
  textSize(30);
  textAlign(CENTER);
  text(fortune, width/2, height/2);
  stroke(255);
  text("Hit Spacebar to peak into the future",width*0.50,height*0.95);

  //Main wall
  noFill();
  rectMode(CENTER);
  rect(width/2,height*0.5,950,600);
  //Side walls

  line(325,80,10,0,0,0);
  line(325,680,60,790,1500,10);
  line(1275,80,1500,0,800,1000);
  line(1275,679,1500,750,2000,1500);

}

//gameEnd()
//
//End the game when the visiter click on exit room
function end(){
  push();
  resizeCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(endImage,0,0,windowWidth,windowHeight);
  pop();
}

function mousePressed() {
  if (room === 0) {
    clear();
    room = 1;
  }
  else if (room === 1){
    clear();
    room = 2;
  }
  else if (room === 2){
    clear();
    room = 3;
  }

}
//Moving the walls
function keyPressed() {
  if (wall === 0 && keyCode === 37) {
    wall = 1;
  }
  else if (wall === 0 && keyCode === 39) {
    wall = 2;
  }
  else if (wall === 1 && keyCode === 37) {
    wall = 2;
  }
  else if (wall === 1 && keyCode === 39) {
    wall = 0;
  }
  else if (wall === 2 && keyCode === 37) {
    wall = 0;
  }
  else if (wall === 2 && keyCode === 39) {
    wall = 1;
  }
if (room === 3 && keyCode === 32) {
  //Randomly distribute predictions
  let card = random(fortuneData.tarot_interpretations);
  fortune = random(card.fortune_telling);
}
}
