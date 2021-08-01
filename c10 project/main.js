
var canvas =  new fabric.Canvas('myCanvas');

 b_y=1;
 b_x=1;

 b_w = 350;
 b_h = 430;

var b_object= "";

function new_image(get_image)
{
		fabric.image.fromURL(get_image,function(Img){
		b_object = Img;
		b_object.scaleToHeight(b_w);
		b_object.scaleToWidth(b_h);
		b_object.set({
		top:b_y,
		Left:b_x,
		});
		canvas.add(b_object);});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image("rr1.png");
	}
	if(keyPressed == '71')
	{
		b_x = 200;
		new_image("gr.png");
	}
	
	if(keyPressed == '80')
	{
		b_x =350;
		new_image("pr.png");
	}
	if(keyPressed == '89')
	{
		b_x = 600;
		new_image("yr.png");
	}
	if(keyPressed == '66')
	{
		b_x = 700;
		new_image("br.png");
	}
	
}

