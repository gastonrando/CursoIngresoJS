function mostrar()
{
	var estacionIngresada; 
	var mensaje;
	var destino;
		
	
	estacionIngresada=txtIdEstacion.value;
	destino=txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";
			}
		break;
		case "Verano":
			switch(destino)
			{
				case "Mar del plata":
				case "Cataratas":
					mensaje="Se viaja";
				break;
				default:
					mensaje="No se viaja";

			}
		break;
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje="No se viaja";
				break;
				default:
					mensaje="Se viaja";
			}
		break;
		default:
			mensaje="Se viaja";
	}


	alert(mensaje);

}//FIN DE LA FUNCIÓN