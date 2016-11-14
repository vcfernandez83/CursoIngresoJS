/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	//bloquear cuadro de texto, propiedadad "readonly" en el html correspondiente
	var miTexto;
	miTexto = prompt("Por favor, ingrese un texto");
	document.getElementById("elNombre").value = miTexto; //completa el formulario
	//get, tab, shift+i completa el getElementById

}

