
document.getElementById('mostrarDatos').style.display = 'none';
document.getElementById('mostrarDatos3').style.display = 'none';
document.getElementById('mostrarDatos4').style.display = 'none';
document.getElementById('mostrarDatos5').style.display = 'none';
document.getElementById('mostrarDatos6').style.display = 'none';
document.getElementById('mostrarDatos7').style.display = 'none';
document.getElementById('mostrarDatos8').style.display = 'none';
document.getElementById('mostrarDatos9').style.display = 'none';
document.getElementById('mostrarDatos10').style.display = 'none';
document.getElementById('mostrarDatos11').style.display = 'none';
document.getElementById('mostrarDatos12').style.display = 'none';


document.getElementById('Dia1').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos').style.display = 'block';
    document.getElementById('mostrarDatosImagen').style.display = 'block';

    document.getElementById('mostrarDatosImagen').innerHTML+= ` <img id="imagen1" src="imagenes/imagen1DatosPrimitivos.jpg" >`
    document.getElementById('mostrarDatos').innerHTML+= `<p id="Texto">En este dia se realizó un programa para mostrar los tipos de Datos </p>`

})

document.getElementById('Dia3').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos3').style.display = 'block';
    document.getElementById('mostrarDatosImagen3').style.display = 'block';

    document.getElementById('mostrarDatosImagen3').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-06 191457.png" >`
    document.getElementById('mostrarDatos3').innerHTML+= `<p id="Texto">En este dia se realizó un programa para sacar el superDigit de un numero </p>`
})

document.getElementById('Dia4').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos4').style.display = 'block';
    document.getElementById('mostrarDatosImagen4').style.display = 'block';

    document.getElementById('mostrarDatosImagen4').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-06 192621.png" >`
    document.getElementById('mostrarDatos4').innerHTML+= `<p id="Texto">En este dia se realizó un programa para la gestion de la información de una persona </p>`
})
document.getElementById('Dia5').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos5').style.display = 'block';
    document.getElementById('mostrarDatosImagen5').style.display = 'block';

    document.getElementById('mostrarDatosImagen5').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-06 194638.png" >`
    document.getElementById('mostrarDatos5').innerHTML+= `<p id="Texto">En este dia se realizó un programa para la gestion de pedidos de una tienda  </p>`
})
document.getElementById('Dia6').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos6').style.display = 'block';
    document.getElementById('mostrarDatosImagen6').style.display = 'block';

    document.getElementById('mostrarDatosImagen6').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-06 194638.png" >`
    document.getElementById('mostrarDatos6').innerHTML+= `<p id="Texto">En este dia se realizó un programa para la gestion de pedidos de una tienda consumiendo un json </p>`
})
document.getElementById('Dia7').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos7').style.display = 'block';
    document.getElementById('mostrarDatosImagen7').style.display = 'block';

    document.getElementById('mostrarDatosImagen7').innerHTML+= ` <img id="imagen1" src="imagenes/imagenSuperherues.jpg" >`
    document.getElementById('mostrarDatos7').innerHTML+= `<p id="Texto">En este dia se realizó un programa para filtrar los superhéroes </p>`
})
document.getElementById('Dia8').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos8').style.display = 'block';
    document.getElementById('mostrarDatosImagen8').style.display = 'block';

    document.getElementById('mostrarDatosImagen8').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-07 095012.png" >`
    document.getElementById('mostrarDatos8').innerHTML+= `<p id="Texto">En este dia se realizó un programa para filtrar los datos de personas ingresando a varias APIS </p>`
})

document.getElementById('Dia9').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos9').style.display = 'block';
    document.getElementById('mostrarDatosImagen9').style.display = 'block';

    document.getElementById('mostrarDatosImagen9').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-07 095402.png" >`
    document.getElementById('mostrarDatos9').innerHTML+= `<p id="Texto">En este dia se realizó un programa para consumir la poke API </p>`
})

document.getElementById('Dia10').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos10').style.display = 'block';
    document.getElementById('mostrarDatosImagen10').style.display = 'block';

    document.getElementById('mostrarDatosImagen10').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-07 095645.png" >`
    document.getElementById('mostrarDatos10').innerHTML+= `<p id="Texto">En este dia se realizó un programa para consumir la API de disney </p>`
})
document.getElementById('Dia11').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos11').style.display = 'block';
    document.getElementById('mostrarDatosImagen11').style.display = 'block';

    document.getElementById('mostrarDatosImagen11').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-07 124648.png" >`
    document.getElementById('mostrarDatos11').innerHTML+= `<p id="Texto">En este dia se realizó una pagina para consumir una API sobre datos de personas</p>`
})

document.getElementById('Dia12').addEventListener('mouseenter', function () {
    ocultar()
    document.getElementById('mostrarDatos12').style.display = 'block';
    document.getElementById('mostrarDatosImagen12').style.display = 'block';

    document.getElementById('mostrarDatosImagen12').innerHTML+= ` <img id="imagen1" src="imagenes/Captura de pantalla 2024-09-07 124939.png" >`
    document.getElementById('mostrarDatos12').innerHTML+= `<p id="Texto">En este dia se realizó una pagina para consumir una API y añadir nuevos datos</p>`
})
function ocultar(){
    document.getElementById('mostrarDatos').style.display = 'none';
    document.getElementById('mostrarDatosImagen').style.display = 'none';
    document.getElementById('mostrarDatos3').style.display = 'none';
    document.getElementById('mostrarDatosImagen3').style.display = 'none';
    document.getElementById('mostrarDatos4').style.display = 'none';
    document.getElementById('mostrarDatosImagen4').style.display = 'none';
    document.getElementById('mostrarDatos5').style.display = 'none';
    document.getElementById('mostrarDatosImagen5').style.display = 'none';
    document.getElementById('mostrarDatos6').style.display = 'none';
    document.getElementById('mostrarDatosImagen6').style.display = 'none';
    document.getElementById('mostrarDatos7').style.display = 'none';
    document.getElementById('mostrarDatosImagen7').style.display = 'none';
    document.getElementById('mostrarDatos8').style.display = 'none';
    document.getElementById('mostrarDatosImagen8').style.display = 'none';
    document.getElementById('mostrarDatos9').style.display = 'none';
    document.getElementById('mostrarDatosImagen9').style.display = 'none';
    document.getElementById('mostrarDatos10').style.display = 'none';
    document.getElementById('mostrarDatosImagen10').style.display = 'none';
    document.getElementById('mostrarDatos11').style.display = 'none';
    document.getElementById('mostrarDatosImagen11').style.display = 'none';
    document.getElementById('mostrarDatos12').style.display = 'none';
    document.getElementById('mostrarDatosImagen12').style.display = 'none';


}