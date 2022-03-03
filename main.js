canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //define una variable con la imagen nuevae
	background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable
	background_imgTag.src = background_image;   // carga la imagen

	rover_imgTag = new Image(); //define una variable con la imagen nuevae
	rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
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
		



}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("Cuando se presione la flecha hacia arriba,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y = rover_y + 10;
		console.log("Cuando se presione la flecha hacia abajo,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >=0)
	{
		rover_x = rover_x - 10;
		console.log("Cuando se presione la flecha hacia arriba,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <=700)
	{
		rover_x = rover_x + 10;
		console.log("Cuando se presione la flecha hacia arriba,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
