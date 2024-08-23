var data = [  //Creación del json
    {
        "informacion_personal": [
            {
                "nombre": "Juan Pérez",
                "edad": 30,
                "direccion": {
                    "calle": "Calle Principal",
                    "numero": 123,
                    "ciudad": "Ciudad Ejemplo"
                },
                "contacto": {
                    "correo": "juan.perez@example.com",
                    "telefono": "+123456789"
                }
            }],
        "historial_educativo": [{

            "nivel": "Secundaria",
            "institucion": "Instituto Secundario",
            "anio_inicio": 2000,
            "anio_fin": 2005,
            "nivelEducativo2":
            {
                "niveldos": "Universidad",
                "institucionUniversitaria": "Universidad Ejemplar",
                "tituloAdquerido": "Licenciatura en Ciencias",
                "añoinicio": 2006,
                "añofinal": 2010
            }
        }

        ],
        "experiencia_laboral": [
            {
                "puesto": "Desarrollador de Software",
                "empresa": "Tech Solutions",
                "periodo": "2010-2015",
                "responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "puesto": "Gerente de Proyectos",
                "empresa": "Proyectos Avanzados",
                "periodo": "2016-actualidad",
                "responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
    }


]
var buclePrincipal = true
while (buclePrincipal == true) {//Se crea un bucle principal para que el usuario seleccione las opciones requeridas

    console.log("Menu principa");//Se crea el menu principal
    console.log("(1) Actualizar");
    console.log("(2) leer");
    console.log("(3) Eliminar");
    console.log("(4) Añadir");
    console.log("(5) Añadir una persona")
    console.log("(6) finalizar Programa");


    var opcion = prompt("Ingrese la opcion deseada:");
    if (opcion == 1) {
        console.log("Menu de opciones");// Se le da a elegir al usuario en que sesión desea actualizar
        console.log("(1) Información personal");
        console.log("(2) Historial educativo");
        console.log("(3) Experiencia Laboral");
        respuesta = prompt("Ingrese el numero de la sesión que desea modificar");
        var cambio2 = prompt("Ingrese el nombre del dato que desea modificar ");
        var datoNuevo = prompt("Ingrese el nuevo dato");
        if (respuesta == 1) {

            for (var datooo of data[0]["informacion_personal"]) {// Se ingresa a la sesión de información personal
                console.log("###############################");
                console.log("Información personal");
                if (cambio2 == "nombre") {
                    datooo.nombre = datoNuevo
                } else if (cambio2 == "edad") {
                    datooo.edad = datoNuevo
                } else if (cambio2 == "calle") {
                    datooo.direccion.calle = datoNuevo
                } else if (cambio2 == "numero") {
                    datooo.direccion.numero = datoNuevo
                } else if (cambio2 == "ciudad") {
                    datooo.direccion.ciudad = datoNuevo
                } else if (cambio2 == "correo") {
                    datooo.contacto.correo = datoNuevo
                } else if (cambio2 == "telefono") {
                    datooo.contacto.telefono = datoNuevo
                }

            }

        } else if (respuesta == 2) {
            for (var dato of data[0]["historial_educativo"]) {// Se ingresa a la sesión del historial educativo
                console.log("###############################");
                console.log("Historial educativo");
                if (cambio2 == "nivel") {
                    dato.nivel = datoNuevo
                } else if (cambio2 == "institucion") {
                    dato.institucion = datoNuevo
                } else if (cambio2 == "anio_inicio") {
                    dato.anio_inicio = datoNuevo
                } else if (cambio2 == "anio_fin") {
                    dato.anio_fin = datoNuevo
                } else if (cambio2 == "niveldos") {
                    dato.nivelEducativo2.niveldos = datoNuevo
                } else if (cambio2 == "institucionUniversitaria") {
                    dato.nivelEducativo2.institucionUniversitaria = datoNuevo
                } else if (cambio2 == "tituloAdquerido") {
                    dato.nivelEducativo2.tituloAdquerido = datoNuevo
                } else if (cambio2 == "añoinicio") {
                    dato.nivelEducativo2.añoinicio = datoNuevo
                } else if (cambio2 == "añofinal") {
                    dato.nivelEducativo2.añofinal = datoNuevo
                }

            }

        } else if (respuesta == 3) {
            for (var dat of data[0]["experiencia_laboral"]) {// Se ingresa a la sesión de Experiencia laboral
                console.log("###############################");
                console.log("experiencia_laboral");
                if (cambio2 == "puesto") {
                    dat.puesto = datoNuevo
                } else if (cambio2 == "empresa") {
                    dat.empresa = datoNuevo
                } else if (cambio2 == "periodo") {
                    dat.periodo = datoNuevo
                } else if (cambio2 == "responsabilidades") {
                    dat.responsabilidades = datoNuevo
                }


            }

        }
        console.log("Se modifico correctamente", cambio2, "a", datoNuevo);//Se le notifica al usuario 



    } else if (opcion == 2) {// Se muestran los datos del json
        for (var datoo of data[0]["informacion_personal"]) {// se crea un bucle for para imprimir la información personal del usuario
            console.log("###############################");
            console.log("Información personal");
            console.log("nombre:", datoo.nombre);
            console.log("edad:", datoo.edad);
            console.log("Calle:", datoo.direccion.calle);
            console.log("numero:", datoo.direccion.numero);
            console.log("ciudad:", datoo.direccion.ciudad);
            console.log("correo:", datoo.contacto.correo);
            console.log("telefonos:", datoo.contacto.telefono);


        }
        for (var dato of data[0]["historial_educativo"]) {// se crea un bucle for para imprimir el historial educativo del usuario
            console.log("###############################");
            console.log("Historial educativo");
            console.log("nivel:", dato.nivel);
            console.log("institucion:", dato.institucion);
            console.log("año de inicio:", dato.anio_inicio);
            console.log("año final:", dato.anio_fin);
            console.log("nivel:", dato.nivelEducativo2.niveldos);
            console.log("institucion:", dato.nivelEducativo2.institucionUniversitaria);
            console.log("titulo:", dato.nivelEducativo2.tituloAdquerido);
            console.log("Año inicial:", dato.nivelEducativo2.añoinicio);
            console.log("Año final:", dato.nivelEducativo2.añofinal);

        }
        for (var dat of data[0]["experiencia_laboral"]) {// se crea un bucle for para imprimir la experiencia laboral del usuario
            console.log("###############################")
            console.log("Experiencia Laboral");
            console.log("puesto", dat.puesto);
            console.log("empresa", dat.empresa);
            console.log("periodo", dat.periodo);
            console.log("responsabilidades", dat.responsabilidades);

        }
    } else if (opcion == 3) {// Se ingresa a la opción 3 de eliminar en la cual puede eliminar cualquier dato
        console.log("Menu de opciones");
        console.log("(1) Información personal"),
            console.log("(2) Historial educativo");
        console.log("(3) Experiencia Laboral");
        respuesta = prompt("Ingrese el numero de la sesión que desea eliminar un dato");
        var cambio2 = prompt("Ingrese el nombre del dato que desea eliminar ");
        var datoNuevo = ""
        if (respuesta == 1) {

            for (var datooo of data[0]["informacion_personal"]) {// Se ingresa a la sesión de información personal
                console.log("###############################")
                console.log("Información personal")
                if (cambio2 == "nombre") {
                    datooo.nombre = datoNuevo
                } else if (cambio2 == "edad") {
                    datooo.edad = datoNuevo
                } else if (cambio2 == "calle") {
                    datooo.direccion.calle = datoNuevo
                } else if (cambio2 == "numero") {
                    datooo.direccion.numero = datoNuevo
                } else if (cambio2 == "ciudad") {
                    datooo.direccion.ciudad = datoNuevo
                } else if (cambio2 == "correo") {
                    datooo.contacto.correo = datoNuevo
                } else if (cambio2 == "telefono") {
                    datooo.contacto.telefono = datoNuevo
                }

            }

        } else if (respuesta == 2) {
            for (var dato of data[0]["historial_educativo"]) {// Se ingresa a la sesión del historial educativo
                console.log("###############################")
                console.log("Historial educativo")
                if (cambio2 == "nivel") {
                    dato.nivel = datoNuevo
                } else if (cambio2 == "institucion") {
                    dato.institucion = datoNuevo
                } else if (cambio2 == "anio_inicio") {
                    dato.anio_inicio = datoNuevo
                } else if (cambio2 == "anio_fin") {
                    dato.anio_fin = datoNuevo
                } else if (cambio2 == "niveldos") {
                    dato.nivelEducativo2.niveldos = datoNuevo
                } else if (cambio2 == "institucionUniversitaria") {
                    dato.nivelEducativo2.institucionUniversitaria = datoNuevo
                } else if (cambio2 == "tituloAdquerido") {
                    dato.nivelEducativo2.tituloAdquerido = datoNuevo
                } else if (cambio2 == "añoinicio") {
                    dato.nivelEducativo2.añoinicio = datoNuevo
                } else if (cambio2 == "añofinal") {
                    dato.nivelEducativo2.añofinal = datoNuevo
                }

            }

        } else if (respuesta == 3) {// Se ingresa a la sesión de Experiencia laboral
            for (var dat of data[0]["experiencia_laboral"]) {
                console.log("###############################")
                console.log("experiencia_laboral")
                if (cambio2 == "puesto") {
                    dat.puesto = datoNuevo
                } else if (cambio2 == "empresa") {
                    dat.empresa = datoNuevo
                } else if (cambio2 == "periodo") {
                    dat.periodo = datoNuevo
                } else if (cambio2 == "responsabilidades") {
                    dat.responsabilidades = datoNuevo
                }


            }

        }
        console.log("Se elimino correctamente", cambio2);

    } else if (opcion == 4) {// Se ingresa a la opción 3 de añadir en la cual se puede añadir las sesiones 
        console.log("Menu de opciones");
        console.log("(1) Información personal");
        console.log("(2) Historial educativo");
        console.log("(3) Experiencia Laboral");
        respuesta = prompt("Ingrese el numero de la sesión que desea añadir");
        if (respuesta == 1) {

            for (var datooo of data[0]["informacion_personal"]) {// Se ingresa a la sesión de información personal
                console.log("###############################")
                console.log("Información personal")
                datooo.nombre = prompt("Ingrese el nombre:")
                datooo.edad = prompt("Ingrese la edad:")
                console.log("Ingrese los datos de la dirrección")
                datooo.direccion.calle = prompt("Ingrese la calle:")
                datooo.direccion.numero = prompt("Ingrese el numero:")
                datooo.direccion.ciudad = prompt("Ingrese el nombre de la ciudad:")
                console.log("Ingrese los datos de contacto")
                datooo.contacto.correo = prompt("Ingrese el correo")
                datooo.contacto.telefono = prompt("Ingrese el numero de telefono")


            }
        } else if (respuesta == 2) {// Se ingresa a la sesión del historial educativo
            for (var dato of data[0]["historial_educativo"]) {
                console.log("###############################")
                console.log("Historial educativo")
                dato.nivel = prompt("Ingrese el nivel:")
                dato.institucion = prompt("Ingrese el nombre de la institución")
                dato.anio_inicio = prompt("Ingrese el año de inicio")
                dato.anio_fin = prompt("Ingrese el año final")
                console.log("Información universitaria")
                dato.nivelEducativo2.niveldos = prompt("Ingrese el nivel:")
                dato.nivelEducativo2.institucionUniversitaria = prompt("Nombre de la institución educativa:")
                dato.nivelEducativo2.tituloAdquerido = prompt("Ingrese el titulo adquerido:")
                dato.nivelEducativo2.añoinicio = prompt("Ingrese el año de inicio:")
                dato.nivelEducativo2.añofinal = prompt("Ingrese el año final:")

            }

        } else if (respuesta == 3) {// Se ingresa a la sesión de Experiencia laboral
            for (var dat of data[0]["experiencia_laboral"]) {
                console.log("###############################")
                console.log("experiencia_laboral")
                dat.puesto = prompt("Ingrese el puesto:")
                dat.empresa = prompt("Ingrese la empresa:")
                dat.periodo = prompt("Ingrese el periodo:")
                dat.responsabilidades = prompt("Ingrese la responsabilidad:")

            }

        }

    } else if (opcion == 6) {// Se finaliza el programa
        console.log("Se finalizo el programa")
        buclePrincipal = false

    } else if (opcion == 5) {
        console.log("Ingrese los datos de la nueva persona")
        var nuevoNombre = prompt("Ingrese el nombre:")
        var nuevaEdad = prompt("Ingrese la edad")
        var nuevaCalle = prompt("Ingrese la calle de dirección:")
        var nuevoNumero = prompt("Ingrese el numero de dirección")
        var nuevaCiudad = prompt("Ingrese el nombre de la ciudad:");
        var nuevoCorreo = prompt("Ingrese el correo:");
        var nuevoTelefono = prompt("Ingrese el numero de telefono:");
        var nuevoNivel = prompt("Ingrese el nivel:");
        var nuevaInstitución = prompt("Ingrese la institución:");
        var nuevoaño = prompt("Ingrese el año de inicio:");
        var nuevoaño2 = prompt("Ingrese el año final:");
        var nuevoNiveldos = prompt("Ingrese el nivel de estudio dos:");
        var nuevaInstitucion2 = prompt("Ingrese la institución:");
        var nuevoTitulo = prompt("Ingrese el titulo adquerido:");
        var nuevoAñoo = prompt("Ingrese el año de inicio:");
        var nuevoAñoo3 = prompt("ingrese el año final:");
        var nuevoPuesto = prompt("Ingrese el puesto:");
        var nuevaEmpresa = prompt("Ingrese la empresa:");
        var nuevoperiodo = prompt("Ingrese el periodo:");
        var nuevoresponsabilidades = prompt("Ingrese las responsabilidades:");
        var nuevopuesto2 = prompt("Ingrese el puesto:");
        var nuevaEmpresa2 = prompt("Ingrese la empresa:");
        var nuevaPeriodooo = prompt("Ingrese el periodo:");
        var nuevasResponsabilidades2 = prompt("Ingrese las responsabilidades:");

        var DatoNuevo = {
            "informacion_personal": [
                {
                    "nombre": nuevoNombre,
                    "edad": nuevaEdad,
                    "direccion": {
                        "calle": nuevaCalle,
                        "numero": nuevoNumero,
                        "ciudad": nuevaCiudad
                    },
                    "contacto": {
                        "correo": nuevoCorreo,
                        "telefono": nuevoTelefono
                    }
                }],
            "historial_educativo": [{

                "nivel": nuevoNivel,
                "institucion": nuevaInstitución,
                "anio_inicio": nuevoaño,
                "anio_fin": nuevoaño2,
                "nivelEducativo2":
                {
                    "niveldos": nuevoNiveldos,
                    "institucionUniversitaria": nuevaInstitucion2,
                    "tituloAdquerido": nuevoTitulo,
                    "añoinicio": nuevoAñoo,
                    "añofinal": nuevoAñoo3
                }
            }

            ],
            "experiencia_laboral": [
                {
                    "puesto": nuevoPuesto,
                    "empresa": nuevaEmpresa,
                    "periodo": nuevoperiodo,
                    "responsabilidades": [

                        nuevoresponsabilidades
                    ]
                },
                {
                    "puesto": nuevopuesto2,
                    "empresa": nuevaEmpresa2,
                    "periodo": nuevaPeriodooo,
                    "responsabilidades": [
                        nuevasResponsabilidades2
                    ]
                }
            ]
        }

        console.log("Se añadio correctamente la nueva persona:")
        data.push(DatoNuevo);



    }
    
    

}



//Programa Desarrollado por Camilo Machuca Vega Grupo:T2