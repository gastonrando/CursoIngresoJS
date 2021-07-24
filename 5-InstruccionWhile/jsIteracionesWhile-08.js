/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	
	contador=0
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si"
	
	
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero\nSe suman los positivos, se multiplican los negativos")
		numeroIngresado=parseInt(numeroIngresado);
		contador+=1;

		if(numeroIngresado<0)
		{
			multiplicacionNegativos*=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>0)
			{
				sumaPositivos+=numeroIngresado;
			}
			else
			{
				alert("Ingrese un numero distinto de 0")
			}
		}

		respuesta=prompt("Desea ingresar mas numeros? Ingrese si o no");

		if(contador==1 && respuesta!="si")
		{
			if(numeroIngresado>-1)
			{
				multiplicacionNegativos=0;
			}
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN