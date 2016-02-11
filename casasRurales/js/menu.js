document.addEventListener('DOMContentLoaded', function() {
	var boton = document.getElementById('puntosMenu');
	var menu = document.getElementById("oculto");

	boton.addEventListener('click', function() {
		if (menu.id=="oculto") {
			menu.setAttribute("id","visible");
		}else{
			menu.setAttribute("id","oculto");
		}
	});

});