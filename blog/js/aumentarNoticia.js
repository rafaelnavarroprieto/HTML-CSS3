function inicio(){

	function mostrarTexto(i){
		var span = document.getElementById('span'+i);
		var mensaje = document.getElementById('readMore'+i);

		if (span.className=="oculto") {
			span.className="visible";
			mensaje.innerHTML="-Read less-";
		}else{
			span.className="oculto";
			mensaje.innerHTML="-Read more-";
		}

	}

	function ratonEncima(event){
		var evento = event || window.event;

		switch(evento.type){
			case "mouseover":
				document.body.className ="over";
				break;
			case "mouseout":
				document.body.className ="notover";
				break;
		}
		
	}
	document.getElementById("article1").addEventListener("mouseover",ratonEncima);
	document.getElementById("article1").addEventListener("mouseout",ratonEncima);
	document.getElementById("article2").addEventListener("mouseover",ratonEncima);
	document.getElementById("article2").addEventListener("mouseout",ratonEncima);
	document.getElementById('readMore1').addEventListener('click', function(e) {
		mostrarTexto(1);
	});
	document.getElementById('readMore2').addEventListener('click', function(e) {
		mostrarTexto(2);
	});


}
document.addEventListener('DOMContentLoaded',inicio);
