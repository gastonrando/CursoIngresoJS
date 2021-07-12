/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*
	let sueldo;
	let aumento;
	let sueldoAumentado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	aumento=sueldo/10;
	sueldoAumentado=sueldo+aumento;
	
	document.getElementById('txtIdResultado').value=sueldoAumentado;
	*/
	
	
	//9Bis

	let sueldo;
	let porcentaje;
	let aumento;
	let sueldoAumentado;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);
	
	porcentaje=prompt("Ingresar porcentaje de aumento:");
	porcentaje=parseInt(porcentaje);
	porcentaje=porcentaje/100
	
	aumento=porcentaje*sueldo;

	sueldoAumentado=sueldo+aumento;
	
	document.getElementById('txtIdResultado').value=sueldoAumentado;


}
