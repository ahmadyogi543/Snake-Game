
//Global variables
let head;
let scl = 10;
let border;

//setup every object and in game
function setup(){

	//creating a canvas
	createCanvas(500,500);

	//set a framerate to same as the scale
	frameRate(scl);

	//Object creations
	head = new Snake(width/2,height/2,255);

	border = {
		x: 0 + 5*scl,
		y: 0 + 5*scl,
		size: width - 10*scl,
		show: function(){
			stroke(255);
			strokeWeight(3);
			noFill();

			square(this.x,this.y,this.size);
		}
	};
}

//draw every object on canvas
function draw(){
	background(0);

	border.show();

	head.update();
	head.show();
}

//function for detect a key if its being pressed by player
function keyPressed(){
	//move left
	if(keyCode == 37){
		head.setSpeed(-scl,0);
	}

	//move up
	else if(keyCode == 38){
		head.setSpeed(0,-scl);
	}

	//move right
	else if(keyCode == 39){
		head.setSpeed(scl,0);
	}

	//move down
	else if(keyCode == 40){
		head.setSpeed(0,scl);
	}
}