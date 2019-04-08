
var d = document.getElementById("paint");
var canva = d.getContext("2d");
var line = 30
var l = 0;
var ys, xe;


for (l= 0 ; l < line; l++) 
 	
{
	ys= 10 * l
	xe = 10 * (l + 1)
	linePaint ("#AFA", 0, ys, xe, 300)
	linePaint ("#AFA", 300, ys, xe, 0)
	
    l= l + 1;

	console.log ("line" + l)
}
linePaint ("#AFA", 0, ys, xe, 300)

 function linePaint (color,xStart,yStart,xEnd,yEnd)

 {
canva.beginPath();
canva.strokeStyle = "red";
canva.moveTo(xStart,yStart);
canva.lineTo(xEnd,yEnd);
canva.stroke();
canva.closePath();
 }



