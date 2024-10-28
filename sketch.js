let ball;
let paddle;
let ballStartX, ballStartY;
let score = 0;


function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');

	ball = new Sprite();
	ball.diameter = 50;
	ballStartX = windowWidth/2;
	ballStartY = windowHeight/9;
	ball.x = ballStartX;
	ball.y = ballStartY;
	ball.color = 'white'
	ball.bounciness = 1;

	paddle = new Sprite();
	paddle.width = 200;
	paddle.height = 20;
	paddle.x = windowWidth/2
	paddle.y = windowHeight*.9
	paddle.color = 'white'
	paddle.collider = 'k'

	world.gravity.y = 10


}

function draw() {
	background('black');


	if (kb.pressing('a')) paddle.vel.x = -12;
	else if (kb.pressing('d')) paddle.vel.x = 12; // how fast i want the paddle to move
	else paddle.vel.x = 0;

if (ball.collides(paddle)) {
	ball.vel.x = random(-8,8);
	ball.vel.y -= 1;
	score += 1; // plus 1 every time paddle hits ball

}
if (ball.x <= 0 || ball.x >= windowWidth) {
	ball.vel.x *= -1;	
}
if (ball.y <= 0 || ball.y >= windowHeight) {
	ball.vel.y *= -1;	
}

if (ball.y > windowHeight) {
ball.x = ballStartX;
ball.y = ballStartY;
ball.vel.x = 0;
ball.vel.y = 0;
score = 0; //score goes to 0 if the ball gets dropped
}


if (paddle.x - paddle.width / 2 < 0) {
	paddle.x = paddle.width / 2; // edge detection
}
if (paddle.x + paddle.width / 2 > windowWidth) {
	paddle.x = windowWidth - paddle.width / 2; // other edge detection
}

fill('grey');
// i forgot how to add fonts but i would have added the segment font here for the score
textSize(1000);
text(`${score}`,windowWidth/2.8,windowHeight/1.2); // weird numbers bc that was how the text would appear more center with the big font
}