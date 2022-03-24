var canvas = new fabric.Canvas('myCanvas')
// Create canvas variable
ball_x = 0;
ball_y = 0;
hole_x = 800;
hole_y = 400;

//Set initial positions for ball and hole images.


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURl('golf-h1.png', function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_onj.set({
			top: hole_y,
			left:hole_x,
		});
		canvas.add(hole_obj)
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURl('ball.png', function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_onj.set({
			top: ball_y,
			left:ball_x,
		});
		canvas.add(ball_obj)
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x == hole_x && ball_y == hole_y){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML = "You have hit the goal!!";
		document.getElementById("myCanvas").style.borderColor = "red"
	}
	
	else{
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
		if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			console.log("Block Image height =" , block_image_height)
			console.log("X =" , ball_x , "Y =" , ball_y)
			new_image();
		}
		
	}

	function down()
	{
		if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			console.log("Block Image height =" , block_image_height)
			console.log("X =" , ball_x , "Y =" , ball_y)
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("Block Image Width =" , block_image_width)
			console.log("X =" , ball_x , "Y =" , ball_y)
			new_image();
		}
	}
	
	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("Block Image Width =" , block_image_width)
			console.log("X =" , ball_x , "Y =" , ball_y)
			new_image();
			
		}
	}
	
}

