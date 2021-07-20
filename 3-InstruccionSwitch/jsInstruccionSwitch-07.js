function mostrar()
{
	var destinoIngresado;
	var mensaje;
	
	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Bariloche":
			mensaje="Se encuentra al Oeste";
		break;
		case "Cataratas":
			mensaje="Se encuentra al norte";
		break;
		case "Mar del plata":
			mensaje="Se encuentra al este";
		break;
		default:
			mensaje="Se encuentra al sur";
	}
	
	
	alert(mensaje);

}//FIN DE LA FUNCIÓN