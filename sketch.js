
//Skala
const scl = 10;

//Kepala ular
let head;

//Batas
let border;

//Makanan ular
let food;

//warna backgroung game
const bgCol = 125;

//Badan ular
let bodies = [];

//Mensetup game
function setup(){

	//Membuat kanvas
	createCanvas(500,500);

	//Menset framerate game
	frameRate(scl);

	//Kepala ular
	head = new Snake(width/2,height/2,255);

	//Batas
	border = {

		// Batas game berada di titik 6*scl
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

	//Posisi makanan ular
	//Membuat list yang menyimpan posisi posisi yang memungkinkan makanan
	//Untuk dimunculkan dengan memerhatikan jika makanan muncul di badan ular
	//Makanan muncul di tempat lain
	let pos = [];
	for(let i = 6*scl; i <= width - 7*scl; i += 10){
		pos.push(i);
	}

	//Makanan ular
	food = {
		x: width/2 + 100,
		y: height/2,
		size: scl,
		positions: pos,

		show: function(){
			noStroke();
			fill(255,0,0);
			
			square(this.x,this.y,this.size);
		},

		newPos: function(body){
			let x = this.positions[floor(random(this.positions.length))];
			let y = this.positions[floor(random(this.positions.length))];

			if(x != body.x && y != body.y){
				this.x = x; this.y = y;
			}
		}
	};
}

//Mengambar semua objek di kanvas
function draw(){
	background(bgCol);

	border.show();
	
	food.show();

	head.update();
	
	//menggambar dan mengupdate badan ular	
	for(let i = bodies.length - 1; i > -1; i--){

		bodies[i].update();
		bodies[i].show();

		if(i != 0){
			bodies[i].x = bodies[i - 1].x;
			bodies[i].y = bodies[i - 1].y;

			//mencek apakah kepala ular mengenai badannya
			if(bodies[i].x === head.x && bodies[i].y === head.y){

				//Menghapus badan ular
				for(let i = bodies.length - 1; i > -1; i--){
					bodies.pop();
				}

				head.resetState();
				break;
			}
		}
	}

	//mencek apakah kepala ular memakan makanan
	if(head.isEats(food)){
		for(let i = bodies.length - 1; i > -1; i--){
			food.newPos(bodies[i]);
		}
		bodies.push(new Snake(width,height,180));
	}

	//mencek apakah panjang ular lebih > 1
	//dengan kata lain mencek apakah ular memiliki badan atau tidak
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

