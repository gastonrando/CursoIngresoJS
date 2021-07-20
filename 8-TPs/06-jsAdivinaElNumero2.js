/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random() * 100) + 1; 

	contadorIntentos=0
  
  	txtIdIntentos.value=contadorIntentos;

	console.log(numeroSecreto);
  	
}

function verificar()
{
	
	var mensaje;
	var diferencia;
  	
	numeroIngresado=txtIdNumero.value;
	numeroIngresado=parseInt(numeroIngresado);
	contadorIntentos+=1;
	diferencia=numeroSecreto-numeroIngresado;

	
	switch(numeroIngresado)
	{
		case numeroSecreto:
			if(contadorIntentos>9)
			{
				mensaje="Afortunado en el amor!!";
			}
			else
			{
				switch(contadorIntentos)
				{
					case 5:
						mensaje="Usted está en la media!!";
					break;
					case 4:
						mensaje="Excelente técnica!!";
					break;
					case 3:
						mensaje="Esto es suerte!!";
					break;
					case 2:
						mensaje="excelente percepción";
					break;
					case 1:
						mensaje="Usted es un Psíquico!!";
					break;
					default:
						mensaje="Falta técnica!!";
				}
			}
		break;
		default:
			if(numeroSecreto>numeroIngresado)
      		{
      		  mensaje="Falta "+diferencia;
      		}
      		else
      		{
        		diferencia=diferencia*-1;
       			mensaje="Se paso por "+diferencia;
      		}
      
	}
	
	txtIdIntentos.value=contadorIntentos;
	alert(mensaje);


}