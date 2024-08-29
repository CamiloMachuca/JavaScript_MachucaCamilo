document.getElementById('button1').addEventListener('click', obtenerMenuProducts);
function obtenerMenuProducts() {// función para ver el menu de productos
    let menuProductsHtml = `
    <div id="contenedor2">

    <h2>Menu Products</h2>

    <button id="Read"> Read </button>
    <button id="Eliminar"> Delete </button>
    <button id="Añadir"> create</button>
    <button id="Editar"> update</button>
    <button id="RetrocederIncio"> Return to the main menu </button>
    </div>

    `;

    document.getElementById('menuProductsHtml').innerHTML = menuProductsHtml;// ingresa al menu de Productos
    document.getElementById('menuProductsHtml').style.display = 'block';
    document.getElementById('menuPrincipal').style.display = 'none';// se borra el menu principal
    document.getElementById('Read').addEventListener('click', verProduct);// Se ingresa a los productos
    document.getElementById('NuevoProduct').style.display = 'none';// Se mantiene oculta la función de añadir un product
    document.getElementById('Añadir').addEventListener('click', addProduct2)// Se ingresa a la función para añadir un nuevo producto

    document.getElementById('RRegresarrr').style.display = 'none'// Se regresa al menu de products
    document.getElementById('Regresar').addEventListener('click', regresarMenuProducts)
    document.getElementById('RRegresarrr').style.display = 'none'
    document.getElementById('RetrocederIncio').addEventListener('click', RegresarMenuInicio)// Se regresa al menu de inicio
    document.getElementById('Eliminar').addEventListener('click', mostrarmenueliminar)// Se ingresa a la función de eliminar un producto
    document.getElementById('RegresarEliminar').addEventListener('click', obtenerMenuProducts);
    document.getElementById('EliminarProducto').style.display = 'none';

}
var datossnuevos = [];
fetch('datos.json')
    .then(res => res.json())
    .then(data => {
        datossnuevos = data;
        MostrarProductos(datossnuevos[0]["products"]);


    });
function verProduct() {// función para ver un producto
    document.getElementById('output').style.display = 'block'
    document.getElementById('RRegresarrr').style.display = 'block'
    document.getElementById('menuProductsHtml').style.display = 'none';
    document.getElementById('RRegresarrr').addEventListener('click', regresarMenuProducts)

}
function MostrarProductos(products) {
    let output = document.getElementById('output');
    output.innerHTML = '';
    for (var product of datossnuevos[0]["products"]) {
        output.innerHTML += `
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
}
document.getElementById('Añadirr').addEventListener('click', addProduct)
function addProduct() {// Función para crear un producto
    document.getElementById('RRegresarrr').style.display = 'none'
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    document.getElementById('Añadir').style.display = 'block';
    document.getElementById('Añadirr').addEventListener('click', addProduct)
    var nuevoId = parseInt(document.getElementById('productId').value);
    var nuevoName = document.getElementById('productName').value;
    var nuevoCategory = document.getElementById('productCategory').value;
    var nuevoPrice = parseFloat(document.getElementById('productPrice').value);
    var nuevoQuantityInstock = parseInt(document.getElementById('productQuantity').value);
    var nuevoSupplierId = parseInt(document.getElementById('productSupplierId').value);
    var producto = {
        "id": nuevoId,
        "name": nuevoName,
        "category": nuevoCategory,
        "price": nuevoPrice,
        "quantityInStock": nuevoQuantityInstock,
        "supplierId": nuevoSupplierId
    }
    datossnuevos[0].products.push(producto);
    MostrarProductos(datossnuevos[0].products)

}

function addProduct2() {// Función para dirigirse a la función para crear un nuevo producto
    document.getElementById('menuProductsHtml').style.display = 'none';
    document.getElementById('NuevoProduct').style.display = 'block';
    document.getElementById('Añadirr').addEventListener('click', addProduct)


}
function regresarMenuProducts() {// Funcion para regresar al menu de products
    document.getElementById('menuProductsHtml').style.display = 'block';
    document.getElementById('NuevoProduct').style.display = 'none';
    document.getElementById('menuProductsHtml').style.display = 'block';
    document.getElementById('RRegresarrr').style.display = 'none'
    document.getElementById('output').style.display = 'none'


}
function RegresarMenuInicio() {// Función para regresar al menu de inicio
    document.getElementById('menuProductsHtml').style.display = 'none';
    document.getElementById('menuPrincipal').style.display = 'block';
    document.getElementById('menuProductsHtml').style.display = 'block';
    document.getElementById('button1').addEventListener('click', obtenerMenuProducts);
    document.getElementById('menuProductsHtml').style.display = 'none';




}
function mostrarmenueliminar() {
    document.getElementById('Eliminarr').addEventListener('click', deleteProduct)
    document.getElementById('menuProductsHtml').style.display = 'none';
    document.getElementById('EliminarProducto').style.display = 'block';

}
function deleteProduct() {// Función para eliminar un producto


    var buscarId = parseInt(document.getElementById('eliminarId').value);
    var products = datossnuevos[0].products;
    var ubicacion = products.findIndex(product => product.id === buscarId);
    if (ubicacion !== -1) {
        products.splice(ubicacion, 1);
        MostrarProductos(products);
    }

}
//#################################################################################################
document.getElementById('NuevoProduct').style.display = 'none';
document.getElementById('button2').addEventListener('click', obtenerMenuSupplier);
function obtenerMenuSupplier() {// función para ver el menu de Supplier 
    let menuProductsHtml2 = `
    <div id="contenedor2">
    <h2>Menu Supplier</h2>
    <button id="Read2"> Read </button>
    <button id="Eliminar2"> Delete </button>
    <button id="Añadir2"> create</button>
    <button id="Editar2"> update</button>
    <button id="RetrocederIncio2"> Return to the main menu </button>
    </div>

    `;

    document.getElementById('menuSupplierHtml2').innerHTML = menuProductsHtml2;// ingresa al menu Suppliers
    document.getElementById('menuSupplierHtml2').style.display = 'block';
    document.getElementById('menuPrincipal').style.display = 'none';// se borra el menu principal
    document.getElementById('Read2').addEventListener('click', verProduct2);// Se ingresa a los Suppliers
    document.getElementById('NuevoProduct2').style.display = 'none';// Se mantiene oculta la función de añadir un Suppliers
    document.getElementById('Añadir2').addEventListener('click', addProduct3)// Se ingresa a la función para añadir un nuevo Suppliers
    document.getElementById('RRegresarrr2').style.display = 'none'// Se regresa al menu de products
    document.getElementById('Regresar2').addEventListener('click', regresarMenuProducts2)
    document.getElementById('RRegresarrr2').style.display = 'none'
    document.getElementById('RetrocederIncio2').addEventListener('click', RegresarMenuInicio2)// Se regresa al menu de inicio
    document.getElementById('Eliminar2').addEventListener('click', mostrarmenueliminar2)// Se ingresa a la función de eliminar un Suppliers
    document.getElementById('RegresarEliminar2').addEventListener('click', obtenerMenuSupplier);
    document.getElementById('EliminarProducto2').style.display = 'none';
    var datossnuevos2 = [];
    fetch('datos.json')
        .then(res => res.json())
        .then(data => {
            datossnuevos2 = data;
            MostrarProductos2(datossnuevos2[0]["suppliers"]);


        });
    function verProduct2() {// función para ver los supplier
        document.getElementById('output2').style.display = 'block'
        document.getElementById('RRegresarrr2').style.display = 'block'
        document.getElementById('menuSupplierHtml2').style.display = 'none';
        document.getElementById('RRegresarrr2').addEventListener('click', regresarMenuProducts2)

    }
    function MostrarProductos2(suppliers) {// función para ver los supplier
        let output = document.getElementById('output2');
        output.innerHTML = '';
        for (var product of datossnuevos2[0]["suppliers"]) {
            output.innerHTML += `

            <div id="MostrarProductos2">
            <p> Id: ${product.id}</p>
            <p> Name: ${product.name}</p>
            <p> phone: ${product.contactInfo.phone}</p>
            <p> Email: ${product.contactInfo.email}</p>
            <p> Address: ${product.contactInfo.address}</p>
            </div>
            `

        };
    }
    document.getElementById('Añadirr2').addEventListener('click', addProduct2)
    function addProduct2() {// Función para crear un suppliers
        document.getElementById('RRegresarrr2').style.display = 'none'
        document.getElementById('Añadirr2').addEventListener('click', addProduct2)
        document.getElementById('Añadirr2').addEventListener('click', addProduct2)
        var nuevoId2 = parseInt(document.getElementById('productId2').value);
        var nuevoName2 = document.getElementById('productName2').value;
        var nuevoPhone = document.getElementById('supplierPhone').value;
        var nuevoEmail = document.getElementById('supplierEmail').value;
        var nuevoAddress = document.getElementById('supplierAddres').value;
        var supplier = {
            "id": nuevoId2,
            "name": nuevoName2,
            "contactInfo": {
                "phone": nuevoPhone,
                "email": nuevoEmail,
                "address": nuevoAddress
            }
        }
        datossnuevos2[0].suppliers.push(supplier);
        MostrarProductos2(datossnuevos2[0].suppliers)

    }

    function addProduct3() {// Función para dirigirse a la función para crear un nuevo supplier
        document.getElementById('menuSupplierHtml2').style.display = 'none';
        document.getElementById('NuevoProduct2').style.display = 'block';
        document.getElementById('Añadirr2').addEventListener('click', addProduct2)


    }
    function regresarMenuProducts2() {// Funcion para regresar al menu de supplier
        document.getElementById('menuSupplierHtml2').style.display = 'block';
        document.getElementById('NuevoProduct2').style.display = 'none';
        document.getElementById('menuSupplierHtml2').style.display = 'block';
        document.getElementById('RRegresarrr2').style.display = 'none'
        document.getElementById('output2').style.display = 'none'


    }
    function RegresarMenuInicio2() {// Función para regresar al menu de inicio
        document.getElementById('menuSupplierHtml2').style.display = 'none';
        document.getElementById('menuPrincipal').style.display = 'block';
        document.getElementById('menuSupplierHtml2').style.display = 'block';
        document.getElementById('button2').addEventListener('click', obtenerMenuSupplier);
        document.getElementById('menuSupplierHtml2').style.display = 'none';

    }
    function mostrarmenueliminar2() {// función para mostrar el menu eliminar
        document.getElementById('Eliminarr2').addEventListener('click', deleteProduct2)
        document.getElementById('menuSupplierHtml2').style.display = 'none';
        document.getElementById('EliminarProducto2').style.display = 'block';

    }
    function deleteProduct2() {// Función para eliminar un supplier
        var buscarId2 = parseInt(document.getElementById('eliminarId2').value);
        for (var produ of datossnuevos2[0]["suppliers"]){
            if (buscarId2==produ.id){
                var borrado=datossnuevos2[0]["suppliers"].indexOf(produ);
                datossnuevos2[0]["suppliers"].splice(borrado,1)
                
            }
        }

    }

}
//####################################################################################
document.getElementById('button3').addEventListener('click', obtenerMenuSupplier2);
function obtenerMenuSupplier2() {// función para ver el menu de Orders
    let menuProductsHtml3 = `
    <div id="contenedor2">
    <h2>Menu orders</h2>
    <button id="Read3"> Read </button>
    <button id="Eliminar3"> Delete </button>
    <button id="Añadir3"> create</button>
    <button id="Editar3"> update</button>
    <button id="RetrocederIncio3"> Return to the main menu </button>
    </div>

    `;

    document.getElementById('menuSupplierHtml3').innerHTML = menuProductsHtml3;// ingresa al menu orders
    document.getElementById('menuSupplierHtml3').style.display = 'block';
    document.getElementById('menuPrincipal').style.display = 'none';// se borra el menu principal
    document.getElementById('Read3').addEventListener('click', verProduct3);// Se ingresa a los Orders
    document.getElementById('NuevoProduct3').style.display = 'none';// Se mantiene oculta la función de añadir un Orders
    document.getElementById('Añadir3').addEventListener('click', addProduct4)// Se ingresa a la función para añadir un nuevo Orders
    document.getElementById('RRegresarrr3').style.display = 'none'// Se regresa al menu de Orders
    document.getElementById('Regresar3').addEventListener('click', regresarMenuProducts3)
    document.getElementById('RRegresarrr3').style.display = 'none'
    document.getElementById('RetrocederIncio3').addEventListener('click', RegresarMenuInicio3)// Se regresa al menu de inicio
    document.getElementById('Eliminar3').addEventListener('click', mostrarmenueliminar3)// Se ingresa a la función de eliminar un Orders
    document.getElementById('RegresarEliminar3').addEventListener('click', obtenerMenuSupplier2);
    document.getElementById('EliminarProducto3').style.display = 'none';
    var datossnuevos3 = [];
    fetch('datos.json')
    .then(res => res.json())
    .then(data => {
        datossnuevos3 = data;
        MostrarProductos3(datossnuevos3[0]["orders"]);


    });
    function verProduct3() {// función para ver un Orders
        document.getElementById('output3').style.display = 'block'
        document.getElementById('RRegresarrr3').style.display = 'block'
        document.getElementById('menuSupplierHtml3').style.display = 'none';
        document.getElementById('RRegresarrr3').addEventListener('click', regresarMenuProducts3)

    }
    function MostrarProductos3(suppliers) {
        let output = document.getElementById('output3');
        output.innerHTML = '';
        for (var product of datossnuevos3[0]["orders"]) {
            output.innerHTML += `
            <div id="MostrarProductos3">
            <p> orderId: ${product.orderId}</p>
            <p> productId: ${product.productId}</p>
            <p> quantity: ${product.quantity}</p>
            <p> orderDate: ${product.orderDate}</p>
            <p> status: ${product.status}</p>
            </div>
            `

        };
    }
    document.getElementById('Añadirr3').addEventListener('click', addProduct3)
    function addProduct3() {// Función para crear un Orders
        document.getElementById('RRegresarrr3').style.display = 'none'
        document.getElementById('Añadirr3').addEventListener('click', addProduct3)
        document.getElementById('Añadirr3').addEventListener('click', addProduct3)
        var nuevoId3 = parseInt(document.getElementById('productId3').value);
        var NuevoProductID =parseInt( document.getElementById('OrdersProductID').value);
        var nuevoQuantity = parseInt(document.getElementById('OrdersQuantity').value);
        var nuevoData = document.getElementById('OrdersData').value;
        var nuevoStatus = document.getElementById('OrdersStatus').value;
        var order = {
            "orderId":nuevoId3,
            "productId":NuevoProductID,
            "quantity":  nuevoQuantity,
            "orderDate":  nuevoData,
            "status": nuevoStatus
        }
        datossnuevos3[0].orders.push(order);
        MostrarProductos3(datossnuevos3[0].orders)

    }

    function addProduct4() {// Función para dirigirse a la función para crear un nuevo Orders
        document.getElementById('menuSupplierHtml3').style.display = 'none';
        document.getElementById('NuevoProduct3').style.display = 'block';
        document.getElementById('Añadirr3').addEventListener('click', addProduct3)

    }
    function regresarMenuProducts3() {// Funcion para regresar al menu de Orders
        document.getElementById('menuSupplierHtml3').style.display = 'block';
        document.getElementById('NuevoProduct3').style.display = 'none';
        document.getElementById('menuSupplierHtml3').style.display = 'block';
        document.getElementById('RRegresarrr3').style.display = 'none'
        document.getElementById('output3').style.display = 'none'


    }
    function RegresarMenuInicio3() {// Función para regresar al menu de inicio
        document.getElementById('menuSupplierHtml3').style.display = 'none';
        document.getElementById('menuPrincipal').style.display = 'block';
        document.getElementById('menuSupplierHtml3').style.display = 'block';
        document.getElementById('button3').addEventListener('click', obtenerMenuSupplier2);
        document.getElementById('menuSupplierHtml3').style.display = 'none';

    }
    function mostrarmenueliminar3() {
        document.getElementById('Eliminarr3').addEventListener('click', deleteProduct3)
        document.getElementById('menuSupplierHtml3').style.display = 'none';
        document.getElementById('EliminarProducto3').style.display = 'block';

    }
    function deleteProduct3() {// Función para eliminar un Orders
        var buscarId3 = parseInt(document.getElementById('eliminarId3').value);
        for (var produ of datossnuevos3[0]["orders"]){
            if (buscarId3==produ.id){
                var borrado2=datossnuevos3[0]["orders"].indexOf(produ);
                datossnuevos3[0]["orders"].splice(borrado2,1)
                
            }
        }

    }

}







// Proyecto Desarrollado por Camilo Machuca Vega Grupo: T2
