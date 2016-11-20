/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numerUno;
	var numerDos;
	/*
	var numerUno=33;
	var numerDos="33";*/
	var suma;

	numerUno = document.getElementById('numeroUno').value;
	numerDos = document.getElementById('numeroDos').value;

	/*
	suma = parseInt(numerUno) + parseInt(numerDos);
	*/

	numerUno = parseInt(numerUno);
	numerDos = parseInt(numerDos);
	suma=numerUno+numerDos;


	alert("la suma es " + suma);

	/*
	alert(parseInt(numerUno)+parseInt(numerDos))*/
}

