/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	/*PARA RESOLVERLO
	var porcentaje;
	var precio=100;

	var aumento;
	//aumento=precio*0.21; //0.21=21/100, solo quiere ver el aumento
	//cuenta matemática que se hace: sueldo + sueldo + 21/100, entonces sueldo 0,21 + 1 = 1,21
	//precioFinal=precio+aumento;
	precioFinal=precio*1.21;*/

	var sueldo;
	var resulta;
	sueldo=document.getElementById('sueldo').value;
	resulta=sueldo*1.1;
	document.getElementById('resultado').value = resulta;

	/*
	alert(document.getElementById('resultado').value);
	 //????? ES CON document.getElementById DEL LADO IZQUIERDO Y ASIGNANDOLE UNA VARIABLE !OK*/





	/*en el EJERCICIO agregamos hacer el aumento por %400
	var sueldo;
	var resulta;
	sueldo=document.getElementById('sueldo').value;
	resulta=sueldo*5;
	alert(resulta);

	*/
}
