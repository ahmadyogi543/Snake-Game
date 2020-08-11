
//Variabel global
const scl = 10;
let head;
let border;
let food;
let bodies = [];

//Mensetup game
function setup(){

	//membuat kanvas
	createCanvas(500,500);

	//menset framerate game
	frameRate(scl);

	//kepala ular
	head = new Snake(width/2,height/2,255);

	//border/batasan
	border = {

		// Batas game berada di titik 6*scl yakni 60
		x: 6*scl,
		y: 6*scl,
		size: width - 12*scl,

		show: function(){
			stroke(255);
			strokeWeight(1);
			noFill();

			square(this.x,this.y,this.size);
		}
	};
	
	//makanan ular
	food = {
		x: width/2 + 100,
		y: height/2,
		size: scl,
		show: function(){
			noStroke();
			fill(255,0,0);
			
			square(this.x,this.y,this.size);
		},

		newPos: function(){
			let positions = [];
			for(let i = 6*scl; i <= width - 7*scl; i += 10){
				positions.push(i);
			}
			this.x = positions[floor(random(positions.length))];
			this.y = positions[floor(random(positions.length))];
		}
	};
}

//Mengambar semua objek di kanvas
function draw(){
	background(51);

	border.show();
	
	food.show();

	head.update();
	

	for(let i = 0; i < bodies.length; i++){
		bodies[i].update();
		bodies[i].show();
	}

	if(head.isEats(food)){
		food.newPos();

		bodies.push(new Snake(width/2,height/2,200));
	}

	for(let i = bodies.length - 1; i > 0; i--){
		bodies[i].x = bodies[i - 1].x;
		bodies[i].y = bodies[i - 1].y;
	}

	if(bodies.length > 0){
		bodies[0].x = head.x;
		bodies[0].y = head.y;
	}

	head.show();

}

//fungsi untuk mendeteksi apakah user memencet keyboard
function keyPressed(){

	//ke kiri
	if(keyCode === LEFT_ARROW){
		head.setSpeed(-scl,0);
	}

	//ke atas
	else if(keyCode == UP_ARROW){
		head.setSpeed(0,-scl);
	}

	//ke kanan
	else if(keyCode == RIGHT_ARROW){
		head.setSpeed(scl,0);
	}

	//ke bawah
	else if(keyCode == DOWN_ARROW){
		head.setSpeed(0,scl);
	}
}
