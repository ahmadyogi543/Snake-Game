//Function constructor for making snake object

function Snake(x,y,color){
	this.x = x;
	this.y = y;
	this.dx = 0;
	this.dy = 0;
	this.size = scl;
	this.color = color;

	this.show = function(){
		fill(this.color);
		noStroke();

		square(this.x,this.y,this.size);
	}

	this.update = function(){
		
		//Pergerakan ular
		this.x += this.dx;
		this.y += this.dy;

	}

	this.setSpeed = function(dx,dy){
		
		//Mengatur pergerakan ular dengan memperhatikan value dx dan dy
		//Jika dx != 0 maka dy = 0 dan jika dy != 0 maka dx = 0

		if(this.dx != -dx || this.dy != -dy){
			this.dx = dx;
			this.dy = dy;
		}
	}
}