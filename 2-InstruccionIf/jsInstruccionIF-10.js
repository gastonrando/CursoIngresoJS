function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.floor(Math.random()*10)+1;

	if(nota>8)
	{
		mensaje=("EXCELENTE."+" Su nota es: "+nota);
	}
	else
	{
		if(nota>3)
		{
			mensaje="APROBO."+" Su nota es: "+nota;
		}
		else
		{
			mensaje="Vamos, la proxima se puede."+" Su nota es: "+nota;
		}
	}
	//console.log(nota);
	alert(mensaje);

}//FIN DE LA FUNCIÓN