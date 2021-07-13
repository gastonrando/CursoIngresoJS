function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;
	var mensaje;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;
	
if(edad>17&&estadoCivil!="Soltero")
{
	alert("Es soltero y no es menor");
}

}//FIN DE LA FUNCIÓN