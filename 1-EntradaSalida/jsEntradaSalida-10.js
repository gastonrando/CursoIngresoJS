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
	let porcentaje;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentaje=prompt("Introduja porcentaje:");
	porcentaje=parseInt(porcentaje);
	porcentaje=porcentaje/100;
	porcentaje=importe*porcentaje;
	
	resultado=importe-porcentaje;

	document.getElementById('txtIdResultado').value=resultado;

}
