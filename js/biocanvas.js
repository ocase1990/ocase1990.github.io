var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.fillStyle="#FF0000";
ctx.fillRect(20,20,150,100);

var my_gradient=ctx.createLinearGradient(0,0,0,170);
my_gradient.addColorStop(0,"black");
my_gradient.addColorStop(0.5,"yellow");
my_gradient.addColorStop(0.1,"gold");
my_gradient.addColorStop(0.3,"white");
ctx.fillStyle=my_gradient;
ctx.fillRect(400,20,200,100);


ctx.font = "30px Arial";
ctx.fillStyle="#FF0000";
ctx.fillText("Casey O'Keefe",180,80);
