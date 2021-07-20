/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado=prompt("Ingrese un sexo f o m");

	while(sexoIngresado!="f")
	{
		sexoIngresado=prompt("Ingrese un sexo f o m");
	}

	alert("Sexo ingresado correctamente");


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN