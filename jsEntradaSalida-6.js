/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerUno;
	var numerDos;
	/*no importa que el 33 sea un número, lo toma como una palabra
	var numerUno=33;
	var numerDos="33";*/
	var suma;

	numerUno = document.getElementById('numeroUno').value;
	numerDos = document.getElementById('numeroDos').value;

	/* UNA FORMA DE RESOLVERLO
	suma = parseInt(numerUno) + parseInt(numerDos); //se parsea cada número antes de sumar
	*/

	//OTRA FORMA DE RESOLVERLO, ÉSTA ES LA ÓPTIOMA
	numerUno = parseInt(numerUno);
	numerDos = parseInt(numerDos);
	suma=numerUno+numerDos;


	alert("la suma es " + suma); //el "+" concatena

	/*PROGRAMADOR AVANZADO, NO USAR EN PARCIAL
	alert(parseInt(numerUno)+parseInt(numerDos))*/
}

