function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador+=1;
		acumulador+=numeroIngresado;
	}
	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}//FIN DE LA FUNCIÓN