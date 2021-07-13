function mostrar()
{
	//tomo la edad  
	var edad;
	var mensaje;
	
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12&&edad<18)
	{
		mensaje=("Es adolescente");

	}
	else
	{
		if(edad>17)
		{
			mensaje=("Es mayor de edad");
		}
		else
		{
			mensaje=("es un niño");
		}
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN