function mostrar()
{
	//tomo la hora
	var horaDelDia;
	var mensaje;
	
	horaDelDia=txtIdHora.value;
	horaDelDia=parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case(7):
		case(8):
		case(9):
		case(10):
		case(11):
			mensaje="Es de mañana."
		break;
		default:
			mensaje="No es de mañana."
	}



	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN