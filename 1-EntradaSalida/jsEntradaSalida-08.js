/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividiendo;
	let numeroDivisor;
	let resto;

	numeroDividiendo=document.getElementById('txtIdNumeroDividendo').value;
	numeroDividiendo=parseInt(numeroDividiendo)
	numeroDivisor=document.getElementById('txtIdNumeroDivisor').value;
	numeroDivisor=parseInt(numeroDivisor);

	resto=numeroDividiendo%numeroDivisor;

	alert("el resto es = "+resto);

}
