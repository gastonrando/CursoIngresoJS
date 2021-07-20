function mostrar()
{
	var destinoIngresado;
	var mensaje;
	
	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			mensaje="Hace calor en el destino seleccionado";
		break;
		default:
			mensaje="Hace frio en el destino seleccionado";
	}
	
	alert(mensaje);


}//FIN DE LA FUNCIÓN