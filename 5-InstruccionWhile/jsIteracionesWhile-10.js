/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos. los promedios se hacen afuera del while
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var modulo;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var mensaje;
	
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	promedioPositivos=0;
	promedioNegativos=0;
	diferencia=0;
	contador=0;

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		modulo=numeroIngresado%2;
		console.log(modulo);

		
		if(numeroIngresado>0)
		{
			cantidadPositivos+=1;
			sumaPositivos+=numeroIngresado;
		}
		else
		{
			if(numeroIngresado<0)
			{
				cantidadNegativos+=1;
				sumaNegativos+=numeroIngresado;
			}
			else
			{
				cantidadCeros+=1;
			}
		}

		if(modulo==0)
		{
			cantidadPares+=1;
		}
		
		respuesta=prompt("desea continuar?");
	}//fin del while


	
	
	if(cantidadNegativos>0)
	{
		promedioNegativos=sumaNegativos/cantidadNegativos;
	}
	if(cantidadPositivos>0)
	{
		promedioPositivos=sumaPositivos/cantidadPositivos;
	}
	
	diferencia=sumaPositivos-sumaNegativos;

	mensaje=("la suma de negativos es: "+sumaNegativos);
	mensaje=mensaje+("\nla suma de positivos es: "+sumaPositivos);
	mensaje=mensaje+("\nla cantidad de positivos es "+cantidadPositivos);
	mensaje=mensaje+("\nla cantidad de negativos es "+cantidadNegativos);
	mensaje=mensaje+("\nla cantidad de numeros pares es "+cantidadPares);
	mensaje=mensaje+("\nel promedio de los positivos es "+promedioPositivos);
	mensaje=mensaje+("\nel promedio de negativos es "+promedioNegativos);
	mensaje=mensaje+("\nla diferencia entre positivos y negativos es "+diferencia)

	alert(mensaje);
	//document.write("la suma de negativos es :"+mensaje);
	
}//FIN DE LA FUNCIÓN