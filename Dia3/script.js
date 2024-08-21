const numero=prompt("Ingrese el numero:")// Se guarda el numero ingresado por el usuario en una variable
var bucleprincipal=true
while (bucleprincipal==true){// Se crea un bucle para sacar el superDigit
    if (numero>10){
        
    

        function convertiralista(numero){// función para comvertir el numero en una lista
            const digitos=[];
            const numerostring=numero.toString();
            for (let i =0; i < numerostring.length; i++){
                const digito=parseInt(numerostring[i]);
                digitos.push(digito);
            }
            return digitos
        }


        const digitos= convertiralista(numero)
        console.log(digitos)
        var totalNumero=0
        for (let i in digitos){//función para sumar los digitos del numero ingresado por el usuario
            totalNumero +=digitos[i]
        }
    

        function convertiralista2(numero2){// función para comvertir el numero en una lista
            const digitos2=[];
            const numerostring=numero2.toString();
            for (let i =0; i < numerostring.length; i++){
                const digito=parseInt(numerostring[i]);
                digitos2.push(digito);
            }
            return digitos2
        }
        var numero2=totalNumero
        const digitos2=convertiralista2(totalNumero)
        console.log (digitos2)

        var totalNumero2=0
        for (let i in digitos2){//función para sumar los digitos del numero ingresado por el usuario
            totalNumero2 +=digitos2[i]
        }
        console.log("El super Digit del numero",numero, "es",totalNumero2)// Se imprime el superDigit
        bucleprincipal=false

    }else if(numero<10){
        console.log("El super digito es:",numero)// Se imprime el superDigit
        bucleprincipal=false
    }
}
// Programa Desarrollado por Camilo Machuca Camilo Grupo: T2
