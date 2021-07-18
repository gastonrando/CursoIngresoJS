/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	//fundamental usar un solo document.getelementbyid

    //variables
    var cantidadLamparas;
    var marcaLamparas;
    var descuento;
    var precioFinal;
    var precio;
    var impuesto;
    var mensaje;

    //entrada
    precio=35;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marcaLamparas=document.getElementById('Marca').value;

    precio=precio*cantidadLamparas;

    //console.log(cantidadLamparas+marcaLamparas);

    //Operacion A
    if(cantidadLamparas>5)
    {
        descuento=50;
    }
    else
    {

        //OperacionB
        if(cantidadLamparas>4)
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        }
        else
        {   
            //Operacion C             
            if(cantidadLamparas>3)
            {
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    descuento=25;
                }
                else
                {
                    descuento=20;
                }

            }
            else
            {
                //Operacion D     
                if(cantidadLamparas>2)
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        descuento=15;
                    }
                    else
                    {
                        if(marcaLamparas=="FelipeLamparas")
                        {
                            descuento=10;
                        }
                        else
                        {
                            descuento=5;
                        }
                    }
                }
                else
                {
                    descuento=0;
                }
            }
            
        } 
    }
    
    //cuentas parte 1/2
    descuento=precio*descuento/100;
    precioFinal=precio-descuento;

    //operacion E
    //salida

    if(precioFinal>120)
    {
        impuesto=precioFinal*10/100;
        precioFinal=precioFinal+impuesto;
        mensaje="El precio final es de $ "+precioFinal+". Usted pago $ "+impuesto+" de impuesto IIBB.";
    }
    else
    {
        impuesto=0;
        mensaje="El precio final es de $ "+precioFinal;
    }
    
    //cuentas parte 2/2
    impuesto=precioFinal*impuesto;
    precioFinal=precioFinal+impuesto;

    document.getElementById('txtIdprecioDescuento').value=mensaje
    
}