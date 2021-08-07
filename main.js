var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var greencar_width = 75;
var greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var background_imgTag, greencar_imgTag;

var greencar_x = 85;
var greencar_y = 385;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar();
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
		
	if(keyPressed == '37')
	{
		left();
			console.log("left");
	}
	
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
		
	if(keyPressed == '87')
	{
		up();
		console.log("W");
	}
	
	if(keyPressed == '83')
	{
		down();
		console.log("S");
	}
		
	if(keyPressed == '65')
	{
		left();
		console.log("A");
	}
	
	if(keyPressed == '68')
	{
		right();
		console.log("D");
	}
		
}

function up()
{
	if (greencar_y >= 0) {
		greencar_y = greencar_y - 10;
		console.log("When up is pressed, " + "x = " + greencar_x + " y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if (greencar_y <= 500) {
		greencar_y = greencar_y + 10;
		console.log("When up is pressed, " + "x = " + greencar_x + " y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if (greencar_x >= 0) {
		greencar_x = greencar_x - 10;
		console.log("When up is pressed, " + "x = " + greencar_x + " y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if (greencar_x <= 700) {
		greencar_x = greencar_x + 10;
		console.log("When up is pressed, " + "x = " + greencar_x + " y = " + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

//Bootrap
if (screen.width < 992) {
	document.getElementById("nan").style.display = "block";
} else {
	document.getElementById("avail").style.display = "block";
	document.body.style.backgroundImage = 'url("concrete-road.jpg")';
}