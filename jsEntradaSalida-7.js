/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numerUno;
	var numerDos;
	var suma;
	numerUno = document.getElementById('numeroUno').value;
	numerDos = document.getElementById('numeroDos').value;
	numerUno = parseInt(numerUno);
	numerDos = parseInt(numerDos);
	suma=numerUno+numerDos;
	alert("la suma es " + suma);

}

function restar()
{
	var numerUno;
	var numerDos;
	var resta;
	numerUno = document.getElementById('numeroUno').value;
	numerDos = document.getElementById('numeroDos').value;
	/*numerUno = parseInt(numerUno);
	numerDos = parseInt(numerDos);*/ //el parseInt  solo es necesario en la suma
	resta=numerUno-numerDos;
	alert("la resta es " + resta);
}

function multiplicar()
{ 
	var numerUno;
	var numerDos;
	var multiplica;
	numerUno = document.getElementById('numeroUno').value;
	numerDos = document.getElementById('numeroDos').value;
	/*numerUno = parseInt(numerUno);
	numerDos = parseInt(numerDos);*/ //el parseInt  solo es necesario en la suma
	multiplica=numerUno*numerDos;
	alert("la multiplicación es " + multiplica);
}

function dividir()
{
	var numerUno;
	var numerDos;
	var divide;
	numerUno = document.getElementById('numeroUno').value;
	numerDos = document.getElementById('numeroDos').value;
	/*numerUno = parseInt(numerUno);
	numerDos = parseInt(numerDos);*/ //el parseInt  solo es necesario en la suma
	divide=numerUno/numerDos;
	alert("la división es " + divide);
}

