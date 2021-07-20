function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño=txtIdMes.value;
	mensaje="Ya pasamos el frio, ahora calor!!!";

	switch(mesDelAño)	
	{
		
		case "Marzo":
		case "Abirl":
		case "Mayo":
		case "junio":
			mensaje="Falta para el invierno";
		break;
		case "Julio":
		case "Agosto":
			mensaje="Abrigate que hace frio.";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN