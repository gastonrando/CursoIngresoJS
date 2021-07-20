/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto;
var contadorIntentos;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
  numeroSecreto=Math.floor(Math.random() * 100) + 1;
   
  contadorIntentos=1
  
  txtIdIntentos.value=contadorIntentos;

  console.log(numeroSecreto);
  console.log(numeroIngresado);

}

function verificar()
{

  var mensaje;
  var diferencia;

  numeroIngresado=txtIdNumero.value;
  numeroIngresado=parseInt(numeroIngresado);

  diferencia=numeroSecreto-numeroIngresado;

  switch(numeroIngresado)
  {
    case numeroSecreto:
      mensaje='Usted es un ganador!!! y en solo '+contadorIntentos+' intentos.';
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
      contadorIntentos=contadorIntentos+1;
      txtIdIntentos.value=contadorIntentos;
  }

  alert(mensaje);

	
}