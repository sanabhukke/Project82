canvas=
document.getElementById(CaNvAs);
ctx = canvas.getContext("2d");

var radius="";
var color="";
var width_of_line="";

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e)
{
    radius=document.getElementById("radius").value;
    width_of_line=document.getElementById("width_of_line").value;
    color=document.getElementById("color").value;
    mouseEvent="mouseDown";
    console.log(my_mouseDown);
}

canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e)
{
    mouseEvent="mouseUp";
    console.log(my_mouseUp);
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mousedown(e)
{
    mouseEvent="mouseleave";
    console.log(my_mouseleave);
}

canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent="mouseDown"){
console.log("Current positions of X and Y coordinates=");
console.log("x =" + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * MathPI);
    ctx.stroke();
    }
}
