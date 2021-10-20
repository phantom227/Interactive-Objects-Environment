var b;
//var b2;

function Ball() {
	this.location = createVector(width/2, height/2);
	this.velocity = createVector(1.5, -2);
	this.move = function() {
		this.location = this.location.add(this.velocity);
	};
	this.bounce = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x	= this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0) {
			this.velocity.y	= this.velocity.y * -1;
		}
	};
	this.display = function() {
		background(0);
		noStroke();
		fill(255); 
		ellipse(this.location.x, this.location.y, 22, 22)
	};
}
//
//function Ball2() {
//	this.location2 = createVector(23, 45);
//	this.velocity2 = createVector(2.5, -2);
//	this.move2 = function() {
//		this.location2 = this.location2.add(this.velocity2);
//	};
//	this.bounce2 = function() {
//		if (this.location2.x > width || this.location2.x < 0) {
//			this.velocity2.x	= this.velocity2.x * -1;
//		}
//		if (this.location2.y > height || this.location2.y < 0) {
//			this.velocity2.y	= this.velocity2.y * -1;
//		}
//	};
//	this.display2 = function() {
//		background(0);
//		noStroke();
//		fill(255); 
//		ellipse(this.location2.x, this.location2.y, 32, 32)
//	};
//}



function setup() {
	createCanvas(400, 300); 
	b = new Ball();
//    b2 = new Ball2();
}

function draw() {
	b.move();
	b.bounce();
	b.display();
//    b2.move2();
//    b2.bounce2();
//    b2.display2();
}