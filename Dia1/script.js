console.log("hola mundo")
// Tipo de dato-Number
numero1= 1;
numero2 = 3.14;
//Verificacion de tipo de datos
console.log(typeof numero1)
console.log(typeof numero2)

// Operaciones 
operacion=((((5**6)+256)/5)*2);
console.log(operacion);

//String
texto1="campus";
texto2="Lands";

//Concatenación
console.log(texto1 + texto2);

//Booleanos
booleano1= true;
booleano2= false;
booleano3= false;
booleano4= true;
operadoresBandera= (booleano1 || booleano2) &  booleano3 || booleano4;
console.log(operadoresBandera);


// Realización de los 4 tipos de funciones
//Función con parametro y retorno
a=2;
b=3;
function myfuction(a,b){
    return a *b
}
console.log(a,b)

// Función sin parametro y sin retorno 
function multiplicar(){
    return 5*7
}
multiplicar();

// Función con parametros y sin retorno
a=2;
b=3;
function multiplicar2(a,b){
    return a*b
}
multiplicar2();

// Función sin parametro y con retorno
function multiplicar3(){
    return 3*5
}
console.log(multiplicar3());


// Ejercicio 1 Calcular el año en que nacio una persona de acuerdo a su eded
var año=prompt("Ingrese tu edad: ")

function calcularAño(){
    return 2024-año
}

console.log("El año en que naciste es: ", calcularAño());

// Ejercicio 2 pasar de grados celcius a fahrenheit
var celcius=10;
function calcularFahrenheit(){
    return F=32+(9*celcius/5)
}

console.log ("Los Fahrenheit son: ", calcularFahrenheit())

// Ejercicio 3 realizar una promoción a un producto
var puesto= 30
function aplicarDescuento(){
    if (20>puesto){
        descuento="10%"
    } else if(50> puesto){
        descuento="50%"
    }
    return descuento
}

let descuentoT=aplicarDescuento(puesto)
console.log("Tu descuento es de: ",descuentoT)


// Los tres tipos de variables
// 1 Variable var
var fruta= "Apple";
function mostrarnombreFruta(){
    return fruta
}

console.log("Mi fruta favorita es: ", mostrarnombreFruta())
// 2 variable let
let animal= "Tigre";

function mostrarnombreAnimal(){
    return animal
}
console.log("Mi animal favorito es: ", mostrarnombreAnimal())
// 3 variable const
const balon= "baloncesto";
function mostrarNombrebalon(){
    return balon
}
console.log("Mi deporte favorito es el: ", mostrarNombrebalon())

