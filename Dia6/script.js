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
    document.getElementById('menuPrincipal').style.display='none';// se borra el menu principal
    document.getElementById('Read').addEventListener('click', verProduct);// Se ingresa a los productos
    document.getElementById('NuevoProduct').style.display='none';// Se mantiene oculta la función de añadir un product
    document.getElementById('Añadir').addEventListener('click', addProduct2)// Se ingresa a la función para añadir un nuevo producto
    document.getElementById('RRegresarrr').style.display='none'// Se regresa al menu de products
    document.getElementById('Regresar').addEventListener('click',regresarMenuProducts)
    document.getElementById('RRegresarrr').style.display='none'
    document.getElementById('RetrocederIncio').addEventListener('click',RegresarMenuInicio)// Se regresa al menu de inicio

    

}

function verProduct(){// función para ver un producto
    document.getElementById('RRegresarrr').style.display='block'
    document.getElementById('menuProductsHtml').style.display='none';
    fetch('datos.json')
    .then(res=> res.json())
    .then(data=>{
        let products= data[0]["products"];
        let output= document.getElementById('output');
        output.innerHTML='';
        products.forEach( product => {
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
            
            
        });

    })
    document.getElementById('RRegresarrr').addEventListener('click',regresarMenuProducts)

    
}



function addProduct(){// Función para crear un producto
    document.getElementById('RRegresarrr').style.display='none'
    document.getElementById('Añadir').style.display='block';
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    document.getElementById('Regresarrr').style.display='none'

    document.getElementById('Regresarrr').style.display='none'
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
    datos[0].products.push(product);
    
    

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
    document.getElementById('MostrarProductos').style.display='none'
    document.getElementById('RRegresarrr').style.display='none'
    



}
function RegresarMenuInicio(){// Función para regresar al menu de inicio
    document.getElementById('menuProductsHtml').style.display='none';
    document.getElementById('menuPrincipal').style.display='block';
    document.getElementById('menuProductsHtml').style.display='block';
    document.getElementById('button1').addEventListener('click', obtenerMenuProducts);


}
function deleteProduct(){// Función para eliminar un producto
    var buscarId=parseInt(document.getElementById('eliminarId').value);
    var products=datos[0].products;
    var ubicacion=products.findIndex(product => product.id === buscarId);
    if (index!==-1){
        products.splice(ubicacion,1);
    }
}
