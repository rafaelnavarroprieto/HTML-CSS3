document.addEventListener('DOMContentLoaded', function() {
	var rango = document.getElementById('precio');
	var precio = document.getElementById('searchPrize');
	
	rango.addEventListener('mousemove', function() {
				precio.innerHTML=rango.value+"€";

	});
});