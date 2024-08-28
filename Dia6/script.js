document.getElementById('button1').addEventListener('click', obtenerMenuProducts);
function obtenerMenuProducts(){// función para ver el menu de productos
    let menuProductsHtml=`
    <div id="contenedor2">

    <h2>Menu Products</h2>

    <button id="Read"> Read </button>
    <button id="Eliminar"> Delete </button>
    <button id="Añadir"> create</button>
    <button id="Editar"> update</button>
    <button id="RetrocederIncio"> Return to the main menu </button>
    </div>

    `;
    
    document.getElementById('menuProductsHtml').innerHTML= menuProductsHtml;// ingresa al menu de Productos
    document.getElementById('menuProductsHtml').style.display='block';
    document.getElementById('menuPrincipal').style.display='none';// se borra el menu principal
    document.getElementById('Read').addEventListener('click', verProduct);// Se ingresa a los productos
    document.getElementById('NuevoProduct').style.display='none';// Se mantiene oculta la función de añadir un product
    document.getElementById('Añadir').addEventListener('click', addProduct2)// Se ingresa a la función para añadir un nuevo producto

    document.getElementById('RRegresarrr').style.display='none'// Se regresa al menu de products
    document.getElementById('Regresar').addEventListener('click',regresarMenuProducts)
    document.getElementById('RRegresarrr').style.display='none'
    document.getElementById('RetrocederIncio').addEventListener('click',RegresarMenuInicio)// Se regresa al menu de inicio

    

}
var datosss=[]
function verProduct(){// función para ver un producto
    document.getElementById('output').style.display='block'
    document.getElementById('RRegresarrr').style.display='block'
    document.getElementById('menuProductsHtml').style.display='none';
    fetch('datos.json')
    .then(res=> res.json())
    .then(datossnuevos=>{
        datosss.push(datossnuevos)
        for(var product of datossnuevos[0]["products"] ){
            output.innerHTML +=`
            <div id="MostrarProductos">
            <p> Id: ${product.id}</p>
            <p> Name: ${product.name}</p>
            <p> Category: ${product.category}</p>
            <p> Price: ${product.price}</p>
            <p> QuantityInStock: ${product.price}</p>
            <p> SupplierId ${product.supplierId}<p>
            </div>
            `
            
        };
        
        

    })
    document.getElementById('RRegresarrr').addEventListener('click',regresarMenuProducts)
    

    
}
document.getElementById('Añadirr').addEventListener('click', addProduct)
function addProduct(){// Función para crear un producto

    document.getElementById('RRegresarrr').style.display='none'
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    document.getElementById('Añadir').style.display='block';
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    var nuevoId= parseInt(document.getElementById('productId').value);
    var nuevoName=document.getElementById('productName').value;
    var nuevoCategory=document.getElementById('productCategory').value;
    var nuevoPrice= parseFloat(document.getElementById('productPrice').value);
    var nuevoQuantityInstock=parseInt(document.getElementById('productQuantity').value);
    var nuevoSupplierId=parseInt(document.getElementById('productSupplierId').value);
    var product={
        "id": nuevoId,
        "name": nuevoName,
        "category": nuevoCategory,
        "price": nuevoPrice,
        "quantityInStock": nuevoQuantityInstock,
        "supplierId": nuevoSupplierId
    }
    datossnuevos[0].products.push(product);
    console.log(datossnuevos[0].products);
    
}


function addProduct2(){// Función para dirigirse a la función para crear un nuevo producto
    document.getElementById('menuProductsHtml').style.display='none';
    document.getElementById('NuevoProduct').style.display='block';
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    

}
function regresarMenuProducts(){// Funcion para regresar al menu de products
    document.getElementById('menuProductsHtml').style.display='block';
    document.getElementById('NuevoProduct').style.display='none';
    document.getElementById('menuProductsHtml').style.display='block';
    document.getElementById('RRegresarrr').style.display='none'
    document.getElementById('output').style.display='none'


}
function RegresarMenuInicio(){// Función para regresar al menu de inicio
    document.getElementById('menuProductsHtml').style.display='none';
    document.getElementById('menuPrincipal').style.display='block';
    document.getElementById('menuProductsHtml').style.display='block';
    document.getElementById('button1').addEventListener('click', obtenerMenuProducts);
    document.getElementById('menuProductsHtml').style.display='none';
    



}
function deleteProduct(){// Función para eliminar un producto
    var buscarId=parseInt(document.getElementById('eliminarId').value);
    var products=datos[0].products;
    var ubicacion=products.findIndex(product => product.id === buscarId);
    if (index!==-1){
        products.splice(ubicacion,1);
    }
}

document.getElementById('NuevoProduct').style.display='none';// Se ingresa a la función para añadir un nuevo producto
document.getElementById('button2').addEventListener('click', obtenerMenuSupplier);
function obtenerMenuSupplier(){// función para ver el menu de Supplier 
    let menuProductsHtml2=`
    <div id="contenedor2">
    <h2>Menu Supplier</h2>
    <button id="Read"> Read </button>
    <button id="Eliminar"> Delete </button>
    <button id="Añadir"> create</button>
    <button id="Editar"> update</button>
    <button id="RetrocederIncio"> Return to the main menu </button>
    </div>

    `;
    
    document.getElementById('menuProductsHtml').innerHTML= menuProductsHtml2;// ingresa al menu de Productos
    document.getElementById('nu')
    document.getElementById('menuPrincipal').style.display='none';// se borra el menu principal
    document.getElementById('MostrarProductos').style.display='block';
    document.getElementById('Read').addEventListener('click', verSupplier);// Se ingresa a los productos
    document.getElementById('NuevoSupplier').style.display='none';// Se mantiene oculta la función de añadir un product
    document.getElementById('Añadir').addEventListener('click', addProduct2)// Se ingresa a la función para añadir un nuevo producto
    document.getElementById('RRegresarrr').style.display='none'// Se regresa al menu de products
    document.getElementById('Regresar').addEventListener('click',regresarMenuProducts)
    document.getElementById('RRegresarrr').style.display='none'
    document.getElementById('RetrocederIncio').addEventListener('click',RegresarMenuInicio)// Se regresa al menu de inicio

}

function verSupplier(){// función para ver un supplier 
    document.getElementById('output').style.display='block'
    document.getElementById('RRegresarrr').style.display='block'
    document.getElementById('menuProductsHtml2').style.display='none';
    fetch('datos.json')
    .then(res=> res.json())
    .then(datossnuevos=>{
        let products= datossnuevos[0]["suppliers"];
        let output= document.getElementById('output');
        output.innerHTML='';
        products.forEach( product => {
            output.innerHTML +=`
            <div id="MostrarProductos">
            <p> Id: ${product.id}</p>
            <p> Name: ${product.name}</p>
            <p> Phone: ${product.contactInfo.Phone}</p>
            <p> email: ${product.contactInfo.email}</p>
            <p> address: ${product.contactInfo.address}</p>
            </div>
            `
            
        });
        

    })
    document.getElementById('RRegresarrr').addEventListener('click',regresarMenuProducts)
    

    
}

function addProduct2(){// Función para dirigirse a la función para crear un nuevo producto
    document.getElementById('menuProductsHtml').style.display='none';
    document.getElementById('NuevoProduct').style.display='block';
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    
}
// Proyecto Desarrollado por Camilo Machuca Vega Grupo: T2
