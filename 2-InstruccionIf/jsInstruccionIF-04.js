function mostrar()
{
	//tomo la edad  
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>12 && edad<18)
	{
		alert("es adolescente");
	
	}
	


}//FIN DE LA FUNCIÓN