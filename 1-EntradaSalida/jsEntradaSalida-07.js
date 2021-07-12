/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

{	
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;
	
	alert("La Suma es = "+suma);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno-numeroDos;

	alert("La Resta es = "+suma);
	
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno*numeroDos;

	alert("La Multiplicacion es = "+suma);

	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let suma;
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	suma=numeroUno/numeroDos;

	alert("La Division es = "+suma);

}

