function mostrar()
{
    var nombrePais;
    var cantidadHabitantes;
    var tempPais;
    var tempPares;
    var contadorPaises;
    var paisHabMin;
    var habitantesMin;
    var cantPaisTempCuarenta;
    var sumaHabitantes;
    var promedioHabitantes;
    var tempMin;
    var paisTempMin;
    var modulo;
    var seguir;
    

    modulo=0;    
    tempPares=0;
    cantPaisTempCuarenta=0;
    seguir=true;
    contadorPaises=0;
    tempMin=50;
    sumaHabitantes=0;
    habitantesMin=7000;

    while(seguir==true)
    {
        cantidadHabitantes+=1;
        contadorPaises+=1;
        nombrePais=prompt("ingrese el nombre de un pais");
        cantidadHabitantes=prompt("ingrese la cantidad de habitantes en miles de millones (Entre 1 y 7000)");
        cantidadHabitantes=parseInt(cantidadHabitantes);

        while(cantidadHabitantes<1 || cantidadHabitantes>7000)
        {
            cantidadHabitantes=prompt("El numero ingresado no es correcto.\nIngrese nuevamente la cantidad de habitantes:");
            cantidadHabitantes=parseInt(cantidadHabitantes);
        }

        tempPais=prompt("Ingrese la temperaruta mínima que se registro en el territorio ");
        tempPais=parseInt(tempPais);
        while(tempPais<-50 || tempPais>50)
        {
            tempPais=prompt("Ingrese una temperatura correcta. Entre -50 y 50");
            tempPais=parseInt(tempPais);
        }
        
        modulo=tempPais%2;

        if(modulo==0)
        {
            tempPares+=1;
        }
        
        if(cantidadHabitantes<habitantesMin)
        {
            habitantesMin=cantidadHabitantes;
            paisHabMin=nombrePais;
        }
        
        if(tempPais>40)
        {
            cantPaisTempCuarenta+=1;
        }
        if(tempPais<tempMin)
        {
            tempMin=tempPais;
            paisTempMin=nombrePais;
        }

        sumaHabitantes+=cantidadHabitantes;
        seguir= confirm("Desea agregar otro pais?");
    }   
    
    promedioHabitantes=sumaHabitantes/contadorPaises;

    mensaje="Cantidad temperatura pares: "+tempPares;
    mensaje+=". El pais con menos habitantes es: "+paisHabMin;
    mensaje+=". Paises que superan los 40 grados: "+cantPaisTempCuarenta;
    mensaje+=". El promedio de habitantes entre los paises ingresados: "+promedioHabitantes;
    mensaje+=". la temperatura mínima ingresada es de:"+tempMin+" y pertenece a: "+paisTempMin;

    document.write(mensaje);





}
