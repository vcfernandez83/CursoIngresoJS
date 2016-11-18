/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//resuelto por mi
	var numerUno;
	var numerDos;
	var divide;
	numerUno = document.getElementById('numeroDividendo').value;
	numerDos = document.getElementById('numeroDivisor').value;
	//divide=numerUno/numerDos;
	resto=numerUno%numerDos;
	alert("el resto es " + resto);
	
	
	/* PARA RESOLVERLO
	var resto=2%10;
	alert(resto);*/
}
