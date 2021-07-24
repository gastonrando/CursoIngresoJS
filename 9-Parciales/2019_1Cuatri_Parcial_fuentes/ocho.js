function mostrar()
{
var letraIngresada;
var numeroIngresado;
var respuesta;
var contador;
var cantidadImpares;
var cantidadPares;
var cantidadCeros;
var promedioNumPos;
var cantidadPositivos;
var sumaNumNeg;
var sumaNumPos;
var numeroMax;
var numeroMin;
var letraMax;
var letraMin;
var modulo;

cantidadPares=0;
cantidadImpares=0;
cantidadCeros=0;
cantidadPositivos=0;
sumaNumPos=0;
sumaNumNeg=0;
contador=0;


respuesta="si";

while(respuesta=="si")
{
    contador+=1;

    letraIngresada=prompt("Ingrese una letra");
    numeroIngresado=prompt("Ingrese un numero entre -100 y 100");

    while(numeroIngresado<-100 || numeroIngresado>100)
    {
        numeroIngresado=prompt("Numero mal ingresado.\nIngrese un numero entre -100 y 100");
    }

    numeroIngresado=parseInt(numeroIngresado);
    
    if(numeroIngresado==0)
    {
        cantidadCeros+=1;
    }
    else
    {
        modulo=numeroIngresado%2;
        switch(modulo)
        {
        case 0:
            cantidadPares+=1;
        break;
        default:
            cantidadImpares+=1;
        }
        
        if(numeroIngresado>0)
        {
            cantidadPositivos+=1;
            sumaNumPos+=numeroIngresado;
        }
        else
        {
            sumaNumNeg+=numeroIngresado;
        }
    }

    if(contador==1)
    {
        numeroMax=numeroIngresado;
        numeroMin=numeroIngresado;
        letraMax=letraIngresada;
        letraMin=letraIngresada;
    }
    else
    {
        if(numeroIngresado>numeroMax)
        {
            numeroMax=numeroIngresado;
            letraMax=letraIngresada;
        }
        else
        {
            if(numeroIngresado<numeroMin)
            {
                numeroMin=numeroIngresado;
                letraMin=letraIngresada;
            }
        }
    }
    
    respuesta=prompt("Desea seguir ingresando numeros y letras?");
}

promedioNumPos=sumaNumPos/cantidadPositivos;
mensaje="a) La cantidad de numeros pares es: "+cantidadPares;
mensaje+=".b) La cantidad de números impares es: "+cantidadImpares;
mensaje+=".c) La cantidad de ceros es: "+cantidadCeros;
mensaje+=".d) El promedio de todos los números positivos ingresados es: "+promedioNumPos;
mensaje+=".e) La suma de todos los números negativos es: "+sumaNumNeg;
mensaje+=".f) El número maximo: "+numeroMax+" su letra es "+letraMax+" el numero mínimo es: "+numeroMin+" y su letra es "+letraMin;

document.write(mensaje);


}
