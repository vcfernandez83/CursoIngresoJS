/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//camelcase: primera letra de las palabras con Mayúscula, a partir de la segunda
	var miVariable;
	miVariable = document.getElementById('elNombre').value; //tomamos el id de la linea 23 del ES-3.html
	alert(miVariable); //dice que devuelve "[object HTMLInputElement]", cuando pongo value me permite ingresar datos
}



