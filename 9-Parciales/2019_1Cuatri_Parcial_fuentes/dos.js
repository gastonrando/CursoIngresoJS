function mostrar()
{
  //Variables
  var nombreUno;
  var nombreDos;
  var pesoUno;
  var pesoDos;
  var sumaPesos;
  var promedioPesos;
  var mensaje;

  //Entrada
  nombreUno=prompt("Indique su nombre");
  nombreDos=prompt("Indique el nombre de su pareja");
  
  pesoUno=prompt("Indique su peso");
  pesoUno=parseInt(pesoUno);
  pesoDos=prompt('Indique el peso de su pareja');
  pesoDos=parseInt(pesoDos);

  //proceso
  sumaPesos=pesoUno+pesoDos;
  promedioPesos=(pesoUno+pesoDos)/2;

  mensaje="Ustedes se llaman "+nombreUno+" y "+nombreDos+", pesan "+pesoUno+" y "+pesoDos+" kilos, y sumados son "+sumaPesos+" kilos y el promedio de peso es "+promedioPesos+" kilos.";

  alert(mensaje);









}