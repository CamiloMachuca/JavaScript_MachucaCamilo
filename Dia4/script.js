var data=[  
    {
        "informacion_personal":[
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
        "historial_educativo": [
        {
        "nivel": "Secundaria",
        "institucion": "Instituto Secundario",
        "anio_inicio": 2000,
        "anio_fin": 2005
        },
        {
        "nivel": "Universidad",
        "institucion": "Universidad Ejemplar",
        "titulo": "Licenciatura en Ciencias",
        "anio_inicio": 2006,
        "anio_fin": 2010
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
console.log("Menu principa")
console.log("(1) Actualizar")
console.log("(2) leer")
console.log("(3) Eliminar")
console.log("(4) Añadir")

var opcion=prompt("Ingrese la opcion deseada:")
if(opcion==1){
    var cambio= prompt("Ingrese la sesion que desea modificar ")
    for (var dato of data[0][cambio]){
        var cambio2=prompt("Ingrese el nombre del dato que desea modificar ")
        if (dato==cambio2){
            dato=prompt("Ingrese el nuevo contenido de ese dato")
            console.log("Cambio realizado correctamente")
        }
    }


}else if (opcion==2){
    for (var datoo of data[0]["informacion_personal"]){
        console.log("nombre:", datoo.nombre)
        console.log("edad:",datoo.edad)
        console.log( "Calle:",datoo.direccion.calle)
        console.log("numero:", datoo.direccion.numero)
        console.log("ciudad:",datoo.direccion.ciudad)
        console.log("correo:", datoo.contacto.correo)
        console.log("telefonos:",datoo.contacto.telefono)
        
    }
    for (var dato of data[0]["historial_educativo"]){
        console.log("nivel", dato.nivel)
    }
}