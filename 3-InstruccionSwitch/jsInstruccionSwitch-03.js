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
			mensaje="Este mes no tiene más de 29 días";
		break;
		
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN