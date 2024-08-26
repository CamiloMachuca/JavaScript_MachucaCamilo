var datos = [
    {
        "products": [
            {
                "id": 1,
                "name": "Laptop",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 101
            }

        ],
        "suppliers": [
            {
                "id": 101,
                "name": "Tech Supplies Inc.",
                "contactInfo": {
                    "phone": "123-456-7890",
                    "email": "sales@techsupplies.com",
                    "address": "123 Tech Lane, Silicon Valley, CA"
                }
            }
        ],
        "orders": [
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-08-23",
                "status": "Delivered"
            }
        ]
    }
]

function updateOrder(){// Función para modificar un orders
    var cambiarId=parseInt(prompt("Ingrese el ID del orders que desea modificarle los datos"));
    for (var produ of datos[0]["orders"]){
        if (cambiarId==produ.orderId){
            produ.orderId=parseInt(prompt("Ingrese el nuevo id:"));
            produ.productId=parseInt(prompt("Ingrese el id del producto a comprar"));
            produ.quantity=parseInt(prompt("Ingrese la cantidad:"));
            produ.orderDate=prompt("Ingrese la fecha en formato YYY-MM-DD");
            produ.status=prompt("Ingrese el status:");

        }else if(cambiarId!=produ.orderId){
            console.log("Orders not found")
        }
    }
}
function deleteOrder(){// Función para eliminar un orders
    console.log("###################################");
    console.log("-------------orders--------------");
    console.log("###################################");
    buscarId=prompt("Ingrese el id del orders a eliminar:");
    for (var produ of datos[0]["orders"]){
        if (buscarId==produ.orderId){
            var borrado=datos[0]["orders"].indexOf(produ);
            datos[0]["orders"].splice(borrado,1)
            
        }else if(buscarId!=produ.orderId){
            console.log("Orders not found")
        }
    }
    console.log("Los orders que quedan son:")
    for (var produ of datos[0]["orders"]){
        console.log("orderId:",produ.orderId);
        console.log("productId:",produ.productId);
        console.log("quantity", produ.quantity);
        console.log("orderDate", produ.orderDate);
        console.log("status", produ.status);

    }
    
    

}
function viewOrders(){// Función para ver los orders
    console.log("###################################");
    console.log("-------------orders--------------");
    console.log("###################################");
    for (var produ of datos[0]["orders"]){
        console.log("orderId:",produ.orderId);
        console.log("productId:",produ.productId);
        console.log("quantity", produ.quantity);
        console.log("orderDate", produ.orderDate);
        console.log("status", produ.status);

    }
}
function addOrder(){// Función para añadir un nuevo orders
    console.log("Ingrese los datos de la nueva orders");
    var nuevoId=parseInt(prompt("Ingrese el id:"));
    var nuevoproductId=parseInt(prompt("Ingrese el id del producto a comprar:"));
    var bucleCantidad=true
    while (bucleCantidad==true){
        var nuevoQuantity=parseInt(prompt("Ingrese la cantidad"));
        var buscarId=nuevoproductId
        for (var produ of datos[0]["products"]){// Se utiliza un for para realizar la actualización de quantityInStock
            if (buscarId==produ.id){
                if(produ.quantityInStock>nuevoQuantity){// Se verifica que la cantidad del producto requerido este disponible
                    var nuevoValor = produ.quantityInStock - nuevoQuantity
                    produ.quantityInStock= nuevoValor
                    console.log("La cantidad es validad")
                    bucleCantidad=false
                    

                }else{
                    console.log("la cantidad del producto no esta disponible");
                    console.log("Porfavor ingrese una cantidad mas pequeña");
                }
                
                
            }
        }
    }

    var nuevoOrdenData=prompt("Ingrese la fecha en formato YYY-MM-DD");
    var nuevostatus=prompt("Ingrese el status:");
    var order={
        "orderId": nuevoId,
        "productId": nuevoproductId,
        "quantity": nuevoQuantity,
        "orderDate":nuevoOrdenData,
        "status": nuevostatus
    }
    datos[0].orders.push(order);
    console.log("Se añadio correctamente la nueva order")
    


}
function addProduct() {// Función para añadir un nuevo producto
    console.log("Ingrese los datos del nuevo producto");
    var nuevoId=parseInt(prompt("Ingrese el id:"));
    var nuevonName=prompt("Ingrese el nombre:");
    var nuevoCategory=prompt("Ingrese la categoria:");
    var nuevoPrice=parseInt(prompt("Ingrese el precio:"));
    var nuevoQuantityInstock=parseInt(prompt("Ingrese la cantidad"));
    var nuevoSupplierId=parseInt(prompt("ingrese el id del proveedor"));
    var product={
        "id": nuevoId,
        "name": nuevonName,
        "category": nuevoCategory,
        "price": nuevoPrice,
        "quantityInStock": nuevoQuantityInstock,
        "supplierId": nuevoSupplierId
    }
    datos[0].products.push(product);
    console.log("Se añadio correctamente el nuevo product")
    return product;


}
function addSupplier() {// Función para añadir un nuevo suppliers
    console.log("Ingrese los datos del nuevo suppliers");
    var nuevoId=parseInt(prompt("Ingrese el id:"));
    var nuevonName=prompt("Ingrese el nombre:");
    var nuevophone=prompt("Ingrese el phone");
    var nuevoEmail=prompt("Ingrese el email");
    var nuevoAddress=prompt("Ingrese el address:");
    
    var supplier={
        "id": nuevoId,
        "name": nuevonName,
        "contactInfo": {
            "phone": nuevophone,
            "email": nuevoEmail,
            "address": nuevoAddress
        }
    }
    datos[0].suppliers.push(supplier);
    console.log("Se añadio correctamente el nuevo suppliers")
    return supplier;
    


}
function viewProducts(){// Función para ver los productos
    console.log("###################################");
    console.log("-------------Product--------------");
    console.log("###################################");
    for (var produ of datos[0]["products"]){
        console.log("id:",produ.id);
        console.log("name:",produ.name);
        console.log("category", produ.category);
        console.log("price", produ.price);
        console.log("quantityInStock", produ.quantityInStock);
        console.log("supplierId", produ.supplierId);

    }
}
function viewSuppliers(){// Función para ver los proveedores
    console.log("###################################");
    console.log("-------------suppliers--------------");
    console.log("###################################");
    for (var produ of datos[0]["suppliers"]){
        console.log("id:",produ.id);
        console.log("name:",produ.name);
        console.log("Información de contacto")
        console.log("phone", produ.contactInfo.phone);
        console.log("email", produ.contactInfo.email);
        console.log("quantityInStock", produ.contactInfo.address);

    }
}
function deleteSupplier(){// Función para eliminar un supliers
    console.log("###################################");
    console.log("-------------suppliers--------------");
    console.log("###################################");
    buscarId=prompt("Ingrese el id del suppliers a eliminar:");
    for (var produ of datos[0]["suppliers"]){
        if (buscarId==produ.id){
            var borrado=datos[0]["suppliers"].indexOf(produ);
            datos[0]["suppliers"].splice(borrado,1)
            
        }else if(buscarId!=produ.id){
            console.log("Supliers not found")
        }
    }
    console.log("Los suppliers que quedan son:")
    for (var produ of datos[0]["suppliers"]){
        console.log("id:",produ.id);
        console.log("name:",produ.name);
        console.log("Información de contacto")
        console.log("phone", produ.contactInfo.phone);
        console.log("email", produ.contactInfo.email);
        console.log("quantityInStock", produ.contactInfo.address);

    }
    
    

}
function deleteProduct(){// Función para eliminar un producto
    buscarId=prompt("Ingrese el id del produc a eliminar:");
    for (var produ of datos[0]["products"]){
        if (buscarId==produ.id){
            var borrado=datos[0]["products"].indexOf(produ);
            datos[0]["products"].splice(borrado,1)
            
        }else if(buscarId!=produ.id){
            console.log("Product not found")
        }
    }
    console.log("Los productos que quedan son:")
    for (var produ of datos[0]["products"]){// Se utiliza un for para mostrar los productos restantes
        console.log("id:",produ.id);
        console.log("name:",produ.name);
        console.log("category", produ.category);
        console.log("price", produ.price);
        console.log("quantityInStock", produ.quantityInStock);
        console.log("supplierId", produ.supplierId);
        

    }
    
    

}
function updateProduct(){//Función para modificar un producto
    var cambiarId=parseInt(prompt("Ingrese el ID del producto que desea modificarle los datos"));
    for (var produ of datos[0]["products"]){
        if (cambiarId==produ.id){
            produ.id=parseInt(prompt("ingrese el id "));
            produ.name=prompt( "Ingrese el nombre:");
            produ.category=prompt("Ingrese la categoria:");
            produ.price= parseInt(prompt("Ingrese el precio:"));
            produ.quantityInStock=parseInt(prompt("Ingrese la cantidad:"))
            produ.supplierId=parseInt(prompt("Ingrese el id del proveedor"))
            
        }else if(cambiarId!=produ.id){
            console.log("Product not found")
        }
    }

}
function updateSupplier(){// Función para modificar un proveedor
    var cambiarId=parseInt(prompt("Ingrese el ID del supplier que desea modificarle los datos"));
    for (var produ of datos[0]["suppliers"]){
        if (cambiarId==produ.id){
            produ.id=parseInt(prompt("Ingrese el nuevo id:"));
            produ.name=prompt("Ingrese el nombre:");
            produ.contactInfo.phone=prompt("Ingrese el phone");
            produ.contactInfo.email=prompt("Ingrese el email:");
            produ.contactInfo.address=prompt("Ingrese el address:");

        }else if(cambiarId!=produ.id){
            console.log("Suppliers not found")
        }
    }
}
function checkStockLevels(){// Función para ver los productos con poco stock
    console.log("###################################");
    console.log("-------------Product--------------");
    console.log("###################################");
    for (var produ of datos[0]["products"]){
        if (produ.quantityInStock<10){
            console.log("Los productos con poco stock son:")
            console.log()
            console.log("id:",produ.id);
            console.log("name:",produ.name);
            console.log("category", produ.category);
            console.log("price", produ.price);
            console.log("quantityInStock", produ.quantityInStock);
            console.log("supplierId", produ.supplierId);
            
        }
    }
}
function restockProduct(){//Función para agregarle mas stock a un producto
    var cambiarId=parseInt(prompt("Ingrese el ID del producto que desea agregarle mas stock:"));
    for (var produ of datos[0]["products"]){
        if (cambiarId==produ.id){
            produ.quantityInStock=parseInt(prompt("Ingrese la nueva cantidad:"))
            
        }else if(cambiarId!=produ.id){
            console.log("Product not found")
        }
    }

}
function generateSalesReport(){// Función para generar reportes
    console.log("------------------------------------")
    var fechaPedidos=prompt("Ingrese la fecha en la cual quieras ver las ventas realizadas y los ingresos")
    var pedidosRealizados=datos[0]["orders"].filter(pedido=>pedido.orderDate== fechaPedidos);
    var ttotalPedidos=pedidosRealizados.length;
    console.log("El numero total de pedidos fue:",ttotalPedidos)
    var totalsuma=0
    for (var produ of pedidosRealizados){

        if (produ.orderDate==fechaPedidos){// se buscan todas las orders que se vendieron ese dia
            console.log("Los pedidos que se realizaron fueron")
            console.log("orderId:",produ.orderId);
            console.log("productId:",produ.productId);
            console.log("quantity", produ.quantity);
            console.log("orderDate", produ.orderDate);
            var idBusqueda=produ.productId
            
            for (var produc of datos[0]["products"]){// Se calcula el total de ingresos
                if (produc.id==idBusqueda){
                    var sumaTotal=produ.quantity*produc.price
                    var totalsuma=+ sumaTotal
                }
            }  
        }else if(fechaPedidos!=produ.orderDate){
            console.log("No se realizo ningun pedido en la fecha",fechaPedidos)
        }
    }
    console.log("El total de ingresos fue:",totalsuma)
}
function generateInventoryReport(){// Función de informe de todos los productos
    
    for (var produ of datos[0]["products"]){
        console.log("###################################");
        console.log("-------------Product--------------");
        console.log("###################################");
        console.log("id:",produ.id);
        console.log("name:",produ.name);
        console.log("category", produ.category);
        console.log("price", produ.price);
        console.log("quantityInStock", produ.quantityInStock);
        console.log("supplierId", produ.supplierId);
        var ValorStock=produ.price*produ.quantityInStock
        console.log("El valor del stock es",ValorStock)

        console.log("###################################");
        console.log("--------supplier information ---------");
        console.log("###################################");
        for (var produc of datos[0]["suppliers"]){
            if (produ.supplierId==produc.id){
                console.log("id:",produc.id);
                console.log("name:",produc.name);
                console.log("Contact Information ")
                console.log("phone", produc.contactInfo.phone);
                console.log("email", produc.contactInfo.email);
                console.log("quantityInStock", produc.contactInfo.address);

            }
        }
    }
    
}
function searchProducts(){// función para buscar o filtrar productos
    console.log("Datos con los que puedes realizar la busqueda")
    console.log("(1) nombre")
    console.log("(2) categoria")
    console.log("(3) Proovedor")
    var datobuscar=prompt("Ingrese la opción por la cual vas a buscar el producto:");
    if (datobuscar==1){
        var Nombrebuscar=prompt("Ingrese el nombre del producto que desea buscar");
        for (var produ of datos[0]["products"]){
            if (Nombrebuscar==produ.name){// Se busca el producto segun el nombre
                console.log("---------Product---------")
                console.log("id:",produ.id);
                console.log("name:",produ.name);
                console.log("category", produ.category);
                console.log("price", produ.price);
                console.log("quantityInStock", produ.quantityInStock);
                console.log("supplierId", produ.supplierId);

            }else if(Nombrebuscar!=produ.name){
                console.log("Product not found")
            }
        }
    }else if(datobuscar==2){// Se busca el producto segun la categoria
        var Categoriabuscar=prompt("Ingrese la categoria del producto que desea buscar");
        for (var produ of datos[0]["products"]){
            if (Categoriabuscar==produ.category){
                console.log("id:",produ.id);
                console.log("name:",produ.name);
                console.log("category", produ.category);
                console.log("price", produ.price);
                console.log("quantityInStock", produ.quantityInStock);
                console.log("supplierId", produ.supplierId);

            }else if(Categoriabuscar!=produ.category){
                console.log("Product not found")
            }
        }

    }else if(datobuscar==3){// Se busca el producto segun el proovedor
        var Proovedorbuscar=parseInt(prompt("Ingrese el id del proveedor del producto a buscar:"));
        for (var produ of datos[0]["products"]){
            if (Proovedorbuscar==produ.supplierId){
                console.log("id:",produ.id);
                console.log("name:",produ.name);
                console.log("category", produ.category);
                console.log("price", produ.price);
                console.log("quantityInStock", produ.quantityInStock);
                console.log("supplierId", produ.supplierId);

            }else if(Proovedorbuscar!=produ.supplierId){
                console.log("Product not found")
            }
        }
    }else{
        console.log("Please enter a valid option:");
    }

}

function filterOrders(){// Función para buscar o filtrar pedidos
    console.log("Datos con los que puedes realizar la busqueda")
    console.log("(1) Estado")
    console.log("(2) fechas")
    console.log("(3) Producto")
    console.log("(4) back to main menu ")
    var datobuscar=prompt("Ingrese la opción por la cual vas a buscar el producto:");
    if (datobuscar==1){// Se busca el orders segun el Estado
        for (var produ of datos[0]["orders"]){
            var buscarEstado=prompt("Ingrese el estado de la orders a buscar")
            if(buscarEstado==produ.status){
                console.log("orderId:",produ.orderId);
                console.log("productId:",produ.productId);
                console.log("quantity", produ.quantity);
                console.log("orderDate", produ.orderDate);
                console.log("status", produ.status);
    
            }else if(buscarEstado!=produ.status){
                console.log("Order not found")
            }
        }
    }else if(datobuscar==2){// Se busca el orders segun la fecha
        for (var produ of datos[0]["orders"]){
            var buscarFecha=prompt("Ingrese la fecha del orders a buscar")
            if(buscarFecha==produ.orderDate){
                console.log("orderId:",produ.orderId);
                console.log("productId:",produ.productId);
                console.log("quantity", produ.quantity);
                console.log("orderDate", produ.orderDate);
                console.log("status", produ.status);
            }else if(buscarFecha!=produ.orderDate){
                console.log("Order not found")
            }
        }
    }else if(datobuscar==3){// se busca el ordes segun el producto
        for (var produ of datos[0]["orders"]){
            var buscaridproducto=parseInt(prompt("Ingrese el id del producto del orders a buscar"))
            if(buscaridproducto==produ.productId){
                console.log("orderId:",produ.orderId);
                console.log("productId:",produ.productId);
                console.log("quantity", produ.quantity);
                console.log("orderDate", produ.orderDate);
                console.log("status", produ.status);
            }else if(buscaridproducto!=produ.productId){
                console.log("Order not found")
            }
        }
    }else if(datobuscar==4){
        console.log("Se regreso al menu principal")
        buclebusquedaa=false

    }else{
        console.log("Please enter a valid option:");
    }
}

var buclePrincipal = true
while (buclePrincipal == true){

    console.log("##########################");
    console.log("Menu principal");// Se muestra el menu principal
    console.log("##########################");
    console.log("(1) products");
    console.log("(2) suppliers");
    console.log("(3) orders");
    console.log("(4) Stock Management")
    console.log("(5) Reporting")
    console.log("(6) Search and Filter")
    console.log("(7) End of program ")
    opcion=prompt("Enter the desired option:");

    if (opcion==1){// Se muestra el menu de products
        var bucleProduct=true
        while(bucleProduct==true){
            console.log("---------------")
            console.log("Menu products")
            console.log("---------------")
            console.log("(1) Read")
            console.log("(2) Delete")
            console.log("(3) create")
            console.log("(4) update")
            console.log("(5) Return to the main menu ")
            respuesta=prompt("Enter the desired option:");
            if (respuesta==1){
                viewProducts()
            }else if(respuesta==2){
                deleteProduct()
            }else if (respuesta==3){
                addProduct()
            }else if(respuesta==4){
                updateProduct()
            }else if(respuesta==5){
                console.log("Return to the main menu ")
                bucleProduct=false
            }else{
                console.log("Invalid option")
                console.log("Please enter a valid option")
            }
        }


    }else if(opcion==2){// Se muestra el menu de suppliers
        var menuSuppliers=true
        while (menuSuppliers==true){
            console.log("-----------------")
            console.log("Menu suppliers")
            console.log("-----------------")
            console.log("(1) Read")
            console.log("(2) Delete")
            console.log("(3) create")
            console.log("(4) update")
            console.log("(5) Return to the main menu ")
            respuesta=prompt("Enter the desired option:");
            if (respuesta==1){
                viewSuppliers()
            }else if(respuesta==2){
                deleteSupplier()
            }else if(respuesta==3){
                addSupplier()
            }else if(respuesta==4){
                updateSupplier()
            }else if(respuesta==5){
                console.log("Return to the main menu:");
                menuSuppliers=false
            }else{
                console.log("Invalid option")
                console.log("Please enter a valid option")
            }
        }

    }else if(opcion==3){// se muestra el menu de orders
        var Bucleorder=true
        while (Bucleorder==true){
            console.log("-----------------")
            console.log("Menu orders")
            console.log("-----------------")
            console.log("(1) Read")
            console.log("(2) Delete")
            console.log("(3) create")
            console.log("(4) update")
            console.log("(5) Return to the main menu ")
            respuesta=prompt("Enter the desired option:");
            if (respuesta==1){
                viewOrders()
            }else if(respuesta==2){
                deleteOrder()
            }else if(respuesta==3){
                addOrder()
            }else if(respuesta==4){
                updateOrder()
            }else if(respuesta==5){
                console.log("Return to the main menu:");
                Bucleorder=false
            }else{
                console.log("Invalid option")
                console.log("Please enter a valid option")
            }
        }
        
    }else if(opcion==4){// Se muestra el menu de stock management
        var bucleStock=true
        while (bucleStock==true){
            console.log("-----------------")
            console.log("Stock Management")
            console.log("-----------------")
            console.log("(1) ver productos con poco stock ");
            console.log("(2) Añadir mas stock a un producto");
            console.log("(3) Return to the main menu ")
            var respuesta=prompt("Enter the desired option:");
            if (respuesta==1){
                checkStockLevels()
            }else if(respuesta==2){
                restockProduct()
            }else if (respuesta==3){
                console.log("Return to the main menu")
                bucleStock=false
            }else{
                console.log("Invalid option")
                console.log("Please enter a valid option")
            }
        }
    }else if(opcion==5){// opción para realizar reportes
        var bucleReporting=true
        while(bucleReporting==true){
            console.log("-----------------")
            console.log("Reporting")
            console.log("-----------------")
            console.log("(1) Informe de ventas para un periodo determinado")
            console.log("(2) Informe de todos los productos")
            console.log("(3) Return to the main menu ")
            var respuesta=prompt("Enter the desired option:");
            if (respuesta==1){
                generateSalesReport()
            }else if(respuesta==2){
                generateInventoryReport()
            }else if (respuesta==3){
                console.log("Back to main menu")
                bucleReporting=false
            }else{
                console.log("Invalid option")
                console.log("Please enter a valid option")
            }
        }

        
    }else if(opcion==6){// opción para filtrar
        var bucleFilter=true
        while (bucleFilter==true){
            console.log("Search and Filter");
            console.log("(1) Filter product");
            console.log("(2) Filter orders");
            console.log("(3) Back to main menu")
            var respuesta=prompt("Enter the desired option:");
            if (respuesta==1){
                searchProducts()
            }else if(respuesta==2){
                filterOrders()
            }else if(respuesta==3){
                console.log("Back to main menu")
                bucleFilter=false

            }else{
                console.log("Invalid option")
                console.log("Please enter a valid option")
            }
        }
    }else if(opcion==7){// opción para finalizar el programa
        console.log("End of program")
        buclePrincipal=false
        
    }else{
        console.log("Invalid option")
        console.log("Please enter a valid option")
    }

    

}
// Programa Desarrollado por Camilo Machuca Vega Grupo: T2
