/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var contador;
	
	contador=0;

	while(contador<10)
	{
		contador+=1;
		alert(contador);

	}


}
//FIN DE LA FUNCIÓN

/* para no tildar la maquina con el while debemos de :
1. nunca entrar
2. nunca salir
3. anularlo con al if con
contador*/
/* muestra 2 while
	var password;
	var contador;

	contador=0;//1

	while(contador<3) //2
	{
		contador+=1; //3
		console.log(contador);

	}

	muestra 1 de while
	var edad;

	edad=15; // 1)

	while(edad<18) // 2)
	{
		//3

		console.log("no es mayor a 18"); 
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
	}
	*/
	//alert('iteración while');