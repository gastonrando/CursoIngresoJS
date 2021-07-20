function mostrar()
{
	var estacionIngresada;
	var mensaje;
	var destino;
	var tarifa;
	var aumento;
	var descuento;
	var precioFinal;
	
	tarifa=15000;
	estacionIngresada=txtIdEstacion.value;
	destino=txtIdDestino.value;
	//defino valor 0 para descuento y aumento para no hacerlo en cada condicion del switch.
	descuento=0
	aumento=0

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					aumento=20;
				break;
				case "Cataratas":
				case "Cordoba":
					descuento=10;
				break;
				default:
					descuento=20
			}
		break;	
		case "Verano":
			switch(destino)
			{
				case "Bariloche":
					descuento=20;
				break;
				case "Cataratas":
				case "Cordoba":
					aumento=10;
				break;
				case "Mar del plata":
					aumento=20;
				break;
			}
		break;
		default:
			switch(destino)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					aumento=10
				break;
			}
	}

	descuento=tarifa*descuento/100;
	aumento=tarifa*aumento/100;
	precioFinal=tarifa+aumento-descuento;

	mensaje="Su viaje con destino a "+destino+" durante el "+estacionIngresada+"\nposee una tarifa inicial de $ "+precioFinal;
	alert(mensaje);

}//FIN DE LA FUNCIÓN