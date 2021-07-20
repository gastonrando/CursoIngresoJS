function mostrar()
{
	//tomo el mes
	var mesDelAño;
	var mensaje;

	mesDelAño=txtIdMes.value;
	mensaje="Este mes tiene 30 o más días";

	switch(mesDelAño)	
	{
		
		case "Febrero":
			mensaje="Este mes tiene 28/29 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Este mes tiene 30 dias";
		break;
		default:
			mensaje="Este mes tiene 31 dias";
	}

	alert(mensaje);




}//FIN DE LA FUNCIÓN