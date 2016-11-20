/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	/*
	var edad;
	var nombre;
	nombre = document.getElementById('elNombre').value;
	edad = document.getElementById("laEdad").value;
	alert("Su nombre es " + nombre + " y tiene " + edad + " años");
	*/

	var unaVariable="datos";
	console.log("primer mensaje");
	var otraVariable;
	
	var miNombre;
	var miEdad;
	miNombre=document.getElementById('elNombre').value;
	console.info("linea final:",unaVariable);
	miEdad = document.getElementById("laEdad").value;
	alert("Usted se llama " + miNombre + " y tiene " + miEdad + " años");

}

