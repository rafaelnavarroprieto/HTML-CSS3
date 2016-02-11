/**
 * Muestra un calendario al cargar el contenido html
 * @author Rafael Navarro Prieto
 * @version 1.0
 */
window.onload = function() {
  Calendar.setup({
    inputField: "entrada",
    ifFormat:   "%d/%m/%Y",
   
    button:     "selector",
   
    weekNumbers: false
  });
	 
}
