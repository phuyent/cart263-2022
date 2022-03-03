//Death door
//
//A class to define the Death door's functions
//This is one of the two door you have to choose
//No score needed, just choose the right door
//Making it out of the building is the most important.

//Death door constructor
//
//Sets the properties
function DeathDoor(x,y,z,w,h,deathDoorImage){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    this.h = h;
    this.deathDoorImage = deathDoorImage;
  }


  // update()
  // Constrain the door to be within the canvas
  DeathDoor.prototype.update = function() {
    this.x = constrain(this.x,0,width-this.w);
    this.y = constrain(this.y,0,height-this.h);
  }

  // display()
    //
    //Display the door
    DeathDoor.prototype.display = function() {
      // Draw a black rectangle
      fill(0);
      rect(this.x,this.y, height/2, 100, 200);
      img(this.deathDoorImage,this.x,this.y,this.w,this.h);
    }
