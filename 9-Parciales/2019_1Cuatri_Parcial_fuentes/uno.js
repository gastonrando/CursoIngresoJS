
function mostrar()
{
    //variables
    var longitudLado;
    var perimetro;
    var mensaje;

    //entrada
    longitudLado=prompt("Ingrese longitud de un lado del triangulo:");
    longitudLado=parseInt(longitudLado);

    //proceso
    perimetro=3*longitudLado;

    //salida
    mensaje="El perimetro del triangulo equilatero es: "+perimetro;

    alert(mensaje);
}
