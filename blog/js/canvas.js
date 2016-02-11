	function dibujar(){
	var colorPrincipal = "#3661A6";
	var colorSecundario = "white";
	var colorTerciario = "black";
	var escala = 0.5;

	var c=document.getElementById("info");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(colorTerciario);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*22,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorPrincipal);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

 	cxt.fillStyle=(colorSecundario);
	cxt.font = "bold 16px sans-serif";
	cxt.fillText("i",escala*46,escala*62);

	var c=document.getElementById("info2");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(colorTerciario);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*22,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(colorPrincipal);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

 	cxt.fillStyle=(colorSecundario);
	cxt.font = "bold 16px sans-serif";
	cxt.fillText("i",escala*46,escala*62);
	
		
}

document.addEventListener("DOMContentLoaded",dibujar);
