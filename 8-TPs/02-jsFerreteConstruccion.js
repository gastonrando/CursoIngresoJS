/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    
    largo=document.getElementById('txtIdLargo').value;
    largo=parseInt(largo);
    ancho=document.getElementById('txtIdAncho').value;
    ancho=parseInt(ancho);

    perimetro=largo*2+ancho*2;
    perimetro=perimetro*3;

    alert("Debe de comprar "+perimetro+" mts de alambre")

}
function Circulo () 
{

    let radio;
    let perimetro;
    
    radio=document.getElementById('txtIdRadio').value;
    radio=parseInt(radio);
    
    perimetro=2*radio*3.14;
    perimetro=perimetro*3;

    alert("Debe de comprar "+perimetro+" mts de alambre")    
	
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    
    largo=document.getElementById('txtIdLargo').value;
    largo=parseInt(largo);
    ancho=document.getElementById('txtIdAncho').value;
    ancho=parseInt(ancho);

    area=largo*ancho;
    cemento=area*2
    cal=area*3
    
    alert("Debe de comprar "+cemento+" bolsas de cemeto y "+cal+" bolsas de cal")

}