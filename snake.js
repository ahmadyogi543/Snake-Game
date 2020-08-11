//Function constructor untuk membuat objek ular

function Snake(x,y,color){
	this.x = x;
	this.y = y;
	this.dx = 0;
	this.dy = 0;
	this.size = scl;
	this.color = color;
	this.hitsBorder = false;

	this.show = function(){
		fill(this.color);
		noStroke();

		square(this.x,this.y,this.size);
	}

	this.update = function(){
		
		//Laju ular
		this.x += this.dx;
		this.y += this.dy;

		//hits border
		if(this.x < 6*scl){
			this.x = width - 7*scl;
		}
		else if(this.x > width - 7*scl){
			this.x = 6*scl;
		}
		else if(this.y < 6*scl){
			this.y = height - 7*scl;
		}
		else if(this.y > height - 7*scl){
			this.y = 6*scl;
		}

	}

	this.isEats = function(food){
		return this.x === food.x && this.y === food.y;
	}

	this.resetState = function(){
		this.x = width/2;
		this.y = height/2;
		this.dx = this.dy = 0;
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