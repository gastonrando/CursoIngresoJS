function mostrar()
{

    //variables

    var continente;
    var dias;
    var mensaje;
    var medioPago;
    var descuento;
    var precioFinal;
    var precio;
    var recargo;

    //entrada
    continente=document.getElementById('Marca').value;
    dias=prompt("Ingrese la cantidad de dias que desea viajar. El precio por dia es de $ 100.");
    precio=100;
    mensaje="Elija uno de los siguientes medios de pago:\nDB (Debito)\nMP (Mercado Pago)\nEF (Efectivo)\nTC (Tarjeta de credito)";

    if(continente=="América")
    {
        descuento=50;
        recargo=0;
        medioPago=prompt(mensaje+"\nPagando con DB posee otro 10% de descuento.");
        
        if(medioPago=="DB")
        {
            descuento=descuento+10;
        }
    }
    else
    {

        if(continente=="África")
        {
            descuento=60;
            recargo=0;
            medioPago=prompt(mensaje+"\nPagando con MP o EF posee 15% de descuento.");
            
            if(medioPago=="MP" || medioPago=="EF")
            {
                descuento=descuento+15;
            }
        }
        
        else
        {
            if(continente=="Europa")
            {
                descuento=20;
                recargo=0;
                medioPago=prompt(mensaje+"\nPagando con DB posee 15% de descuento.");
                
                if(medioPago=="DB")
                {
                    descuento=descuento+15;
                }
                else
                {
                    if(medioPago=="MP")
                    {
                        descuento=descuento+10;
                    }
                    else
                    {
                        descuento=descuento+5;
                    }
                }    
            }
            else
            {
                descuento=0;    
                recargo=20;
                medioPago=prompt(mensaje);
            }
        }
    }

    precioFinal=precio*dias;
    recargo=precioFinal*recargo/100;
    descuento=precioFinal*descuento/100;
    precioFinal=precioFinal-descuento+recargo;

    alert("Su viaje a "+continente+" . Le costara $ "+precioFinal+" con un descuento de $ "+descuento+", estara abonando con: "+medioPago);

    /*console.log(descuento);
    console.log(recargo);
    console.log(precioFinal);*/

}
