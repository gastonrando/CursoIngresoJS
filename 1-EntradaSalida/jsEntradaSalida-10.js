/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*
	let importe;
	let porcentaje;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);
	porcentaje=importe/4;
	resultado= importe-porcentaje

	document.getElementById('txtIdResultado').value=resultado;
	*/

	//10Bis

	let importe;
	let porcentajeIngresado;
	let porcentajeCalculado;
	let resultado;
	let mensaje;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentajeIngresado=prompt("Introduja porcentaje:");
	porcentajeIngresado=parseInt(porcentajeIngresado);
	
	porcentajeCalculado=porcentajeIngresado/100;
	porcentajeCalculado=importe*porcentajeCalculado;
	
	resultado=importe-porcentajeCalculado;

	document.getElementById('txtIdResultado').value="El importe final es $"+resultado+" con un descuento de $"+porcentajeCalculado;

}
