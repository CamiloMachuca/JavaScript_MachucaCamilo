const datoss='https://randomuser.me/api/'// Se guarda la api en una variable
fetch(datoss)
.then(Response => Response.json())
.then(Data=>{

    document.getElementById('imagennn').innerHTML+= ` <img id="imagennn" src="${Data.results[0].picture.large}" > `// Se muestra la imagen de la persona
    document.getElementById('mostrarDatos').innerHTML+= `<p>Hi, My name is </p> <b>${Data.results[0].name.first} ${Data.results[0].name.last}</b>`

    document.getElementById('imagen1').addEventListener('mouseenter', function () {// Función para ver el nombre 
        document.getElementById('mostrarDatos').style.display = 'block';
        document.getElementById('mostrarDatos2').style.display = 'none';
        document.getElementById('mostrarDatos3').style.display = 'none';
        document.getElementById('mostrarDatos4').style.display = 'none';
        document.getElementById('mostrarDatos5').style.display = 'none';
        document.getElementById('mostrarDatos6').style.display = 'none';

        document.getElementById('mostrarDatos').innerHTML+= `<p>Hi, My name is </p> <b>${Data.results[0].name.first} ${Data.results[0].name.last}</b>`
    })

   

    document.getElementById('imagen2').addEventListener('mouseenter', function () {// Función para ver el nemail
        document.getElementById('mostrarDatos2').style.display = 'block';

        document.getElementById('mostrarDatos').style.display = 'none';
        document.getElementById('mostrarDatos3').style.display = 'none';
        document.getElementById('mostrarDatos4').style.display = 'none';
        document.getElementById('mostrarDatos5').style.display = 'none';
        document.getElementById('mostrarDatos6').style.display = 'none';

        document.getElementById('mostrarDatos2').innerHTML+= `<p>My email address is </p> <b>${Data.results[0].email}</b>`
    })
    document.getElementById('imagen3').addEventListener('mouseenter', function () {// Función para ver la fecha de cumpleaños
        document.getElementById('mostrarDatos3').style.display = 'block';

        document.getElementById('mostrarDatos').style.display = 'none';
        document.getElementById('mostrarDatos2').style.display = 'none';
        document.getElementById('mostrarDatos4').style.display = 'none';
        document.getElementById('mostrarDatos5').style.display = 'none';
        document.getElementById('mostrarDatos6').style.display = 'none';


        document.getElementById('mostrarDatos3').innerHTML+= `<p>My birthday is </p> <b>${Data.results[0].dob.date}</b>`

    })
    document.getElementById('imagen4').addEventListener('mouseenter', function () {// Función para ver la dirección
        document.getElementById('mostrarDatos4').style.display = 'block';

        document.getElementById('mostrarDatos').style.display = 'none';
        document.getElementById('mostrarDatos2').style.display = 'none';
        document.getElementById('mostrarDatos3').style.display = 'none';
        document.getElementById('mostrarDatos5').style.display = 'none';
        document.getElementById('mostrarDatos6').style.display = 'none';

        document.getElementById('mostrarDatos4').innerHTML+= `<p>My address is </p> <b>${Data.results[0].location.street.number} ${Data.results[0].location.street.name}</b>`

    })
    document.getElementById('imagen5').addEventListener('mouseenter', function () {// Función para ver el numero de celular
        document.getElementById('mostrarDatos5').style.display = 'block';

        document.getElementById('mostrarDatos').style.display = 'none';
        document.getElementById('mostrarDatos2').style.display = 'none';
        document.getElementById('mostrarDatos3').style.display = 'none';
        document.getElementById('mostrarDatos4').style.display = 'none';
        document.getElementById('mostrarDatos6').style.display = 'none';

        document.getElementById('mostrarDatos5').innerHTML+= `<p>My phone number is </p> <b>${Data.results[0].phone}</b>`

    })
    document.getElementById('imagen6').addEventListener('mouseenter', function () {// Función para ver la contraseña
        document.getElementById('mostrarDatos6').style.display = 'block';

        document.getElementById('mostrarDatos').style.display = 'none';
        document.getElementById('mostrarDatos2').style.display = 'none';
        document.getElementById('mostrarDatos3').style.display = 'none';
        document.getElementById('mostrarDatos4').style.display = 'none';
        document.getElementById('mostrarDatos5').style.display = 'none';

        document.getElementById('mostrarDatos6').innerHTML+= `<p>My password is </p> <b>${Data.results[0].login.password}</b>`

    })



})


// funcion para mantener el hover en stop hasta pasar a la siguiente opción
var imagenes= document.querySelectorAll('.imagen');// Se guardan todas las imagenes con el id imagen en una variable

for(var imagen of imagenes){// Se itera sobre cada imagen
    imagen.addEventListener('mouseenter', function(){// Se busca la imagen que tenga el cursor sobre ella
        for(var img of imagenes){
            img.classList.remove('imagenVerde');// Se remueve la otra propiedad o style a las demas imagenes
        }
        this.classList.add('imagenVerde');// se asigna esa propieda a la imagen previamente seleccionada
    });
};

// Programa desarrollado por Camilo Machuca Vega Grupo: T2


