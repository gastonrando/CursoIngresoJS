/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	respuesta="si"
	contador=0;
	acumulador=0;
	
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("Desea seguir ingresando numeros? Ingrese si o no");
		contador+=1
		acumulador+=numeroIngresado	
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;


}//FIN DE LA FUNCIÓN