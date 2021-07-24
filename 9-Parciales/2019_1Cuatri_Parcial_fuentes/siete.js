function mostrar()
{
var alturaIngresada;
var sumaAlturas;
var sexo;
var mensaje;
var contador;
var promedioAlturas;
var alturaMin;
var sexoMin;
var cantidadAltas;

contador=0;
cantidadAltas=0;
sumaAlturas=0;
alturaMin=251;


while(contador<5)
{
    alturaIngresada=prompt("Ingrese una estatura en cm de 0 a 250");
    contador+=1;

    while(alturaIngresada<0 || alturaIngresada>250)
    {
        alturaIngresada=prompt("Altura incorrecta!\nIngrese una altura entre 0 y 250");
    }

    alturaIngresada=parseInt(alturaIngresada);
    sumaAlturas+=alturaIngresada;

    sexo=prompt("Ingrese el sexo del jugador/a. f o m");

    while(sexo!="f" && sexo!="m")
    {
        sexo=prompt("sexo mal ingresado!\nIngrese el sexo del jugador/a. f o m");
    }

    if(alturaIngresada<alturaMin)
    {
        alturaMin=alturaIngresada;
        sexoMin=sexo;
    }
    switch(sexo)
    {
        case "f":
            if(alturaIngresada>190)
            {
                cantidadAltas+=1
            }
        break;
    }
}

promedioAlturas=sumaAlturas/contador;

mensaje="El promedio de las alturas es: "+promedioAlturas;
mensaje=mensaje+"\n la altura mas baja es: "+alturaMin+", y su sexo es: "+sexoMin;
mensaje=mensaje+"\n la cantidad de mujeres que su altura supere los 190cm: "+cantidadAltas;

alert(mensaje);


}
