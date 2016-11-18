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

//MENSAJES PARA EL PROGRAMADOR

	var unaVariable="datos";
	console.log("primer mensaje") //acá sacar el ";" no da error, en otra línea, puede darlo (ej. if)
	var otraVariable;
	
//ERRORES F12 EN GOOGLE CHROME
	//var mi nombre; //error
	var miNombre;
	var miEdad;
	miNombre=document.getElementById('elNombre').value; //error si pongo ("el Nombre"): cannot read property "value" of null(...)
	console.info("linea final:",unaVariable);
	miEdad = document.getElementById("laEdad").value;
	alert("Usted se llama " + miNombre + " y tiene " + miEdad + " años");

}

