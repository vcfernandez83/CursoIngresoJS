/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*//iniciación simple de una variable:
	var nombre;
	nombre = "Verónica";
	alert(nombre);
	//diferente si le agrego comillas, me lo muestra literal. no la variable nombre
	*/
	
	/*var nombre;
	nombre = "Verónica";
	alert("Mi nombre es: " + nombre); //concatenar
	//los uúnicos espacios válidos son los que están entre comillas
	*/

	/*//concatenar más
	var apellido = "Fernández";
	var nombre;
	nombre = "Verónica";
	alert("Mi nombre es " + nombre + " y mi apellido es " + apellido);
	*/

	//prompt tiene un = y un lugar donde guardarlo
	//va antes del alert()
	nombre = prompt(""ingrese su nombre", "nn""); //doble comillas y aparece segundo texto
	alert("Mi nombre es: " + nombre);
}

