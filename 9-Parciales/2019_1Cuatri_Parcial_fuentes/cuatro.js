function mostrar()
{
    //variables
    var numeroUno;
    var numeroDos;
    var resultado;
    var mensaje;

    //Entrada
    numeroUno=prompt("Ingrese un numero;");
    numeroDos=prompt("Ingrese otro numero:");    

    if(numeroUno==numeroDos)
    {
        mensaje=numeroUno+numeroDos;
    }
    else
    {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        if(numeroUno>numeroDos)
        {
            resultado=numeroUno-numeroDos;
            mensaje="la resta de los numeros es: "+resultado;

            if(resultado>10)
            {
                mensaje=mensaje+" y supero el 10.";
            }
        }
        else
        {
            resultado=numeroUno+numeroDos;
            mensaje="La suma de los numeros es: "+resultado;
        }
    }

    //salida
    alert(mensaje);

}
