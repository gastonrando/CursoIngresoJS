function mostrar()
{
//variables
    var precio;
    var porcentajeDescuento;
    var descuentoCalculado;
    var precioFinal;
    var mensaje;

//Entrada
    precio=prompt("Indique el precio");
    precio=parseInt(precio);
    porcentajeDescuento=prompt('indique el porcentaje de descuento');
    porcentajeDescuento=parseInt(porcentajeDescuento);

//proceso
    descuentoCalculado=precio*porcentajeDescuento/100;
    precioFinal=precio-descuentoCalculado;
    mensaje="El precio final es de $"+precioFinal+" con un descuento de $"+descuentoCalculado;

//salida
    document.getElementById('elPrecioFinal').value=mensaje;
    
}
