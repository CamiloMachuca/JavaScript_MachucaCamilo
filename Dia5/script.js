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
            
        }else{
            console.log("No hay productos con poco stock")
        }
        

    }
}
function restockProduct(){//Función para modificar un producto
    var cambiarId=parseInt(prompt("Ingrese el ID del producto que desea agregarle mas stock:"));
    for (var produ of datos[0]["products"]){
        if (cambiarId==produ.id){
            produ.quantityInStock=parseInt(prompt("Ingrese la nueva cantidad:"))
            
        }
    }

}
function generateSalesReport(){
    var fechaPedidos=prompt("Ingrese la fecha en la cual quieras ver las ventas realizadas y los ingresos")
    console.log("Los pedidos que se realizaron fueron")
    var pedidosRealizados=datos[0]["orders"].filter(pedido=>pedido.orderDate== fechaPedidos);
    var ttotalPedidos=pedidosRealizados.length;
    console.log("El numero total de pedidos fue:",ttotalPedidos)
    for (var produ of pedidosRealizados){
        if (produ.orderDate==fechaPedidos){// se buscan todas las orders que se vendieron ese dia
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
            console.log("El total de ingresos fue:",totalsuma)
            console.log("Ventas por productos")
        }else{
            console.log("No se realizo ningun pedido el dia",fechaPedidos)
        }
        

    }

}
var buclePrincipal = true
while (buclePrincipal == true){

    console.log("##########################");
    console.log("Menu principal");
    console.log("##########################");
    console.log("(1) products");
    console.log("(2) suppliers");
    console.log("(3) orders");
    console.log("(4) Stock Management")
    console.log("(5) Reporting")
    console.log("(6) Search and Filter")
    console.log("(7) Finalizar")
    opcion=prompt("Ingrese la opción deseada:");

    if (opcion==1){// Se muestra el menu de products
        var bucleProduct=true
        while(bucleProduct==true){
            console.log("Menu products")
            console.log("(1) Read")
            console.log("(2) Delete")
            console.log("(3) create")
            console.log("(4) update")
            console.log("(5) Return to the main menu ")
            respuesta=prompt("Ingrese la opción deseada:");
            if (respuesta==1){
                console.log(viewProducts())
            }else if(respuesta==2){
                console.log(deleteProduct())
            }else if (respuesta==3){
                console.log(addProduct())
            }else if(respuesta==4){
                console.log(updateProduct())
            }else if(respuesta==5){
                console.log("Se regreso al menu principal")
                bucleProduct=false
            }else{
                console.log("Opción no valida")
                console.log("Porfavor ingrese una opción validad")
            }
        }


    }else if(opcion==2){// Se muestra el menu de suppliers
        var menuSuppliers=true
        while (menuSuppliers==true){
            console.log("Menu suppliers")
            console.log("(1) Read")
            console.log("(2) Delete")
            console.log("(3) create")
            console.log("(4) update")
            console.log("(5) Return to the main menu ")
            respuesta=prompt("Ingrese la opción deseada:");
            if (respuesta==1){
                console.log(viewSuppliers())
            }else if(respuesta==2){
                console.log(deleteSupplier())
            }else if(respuesta==3){
                console.log(addSupplier())
            }else if(respuesta==4){
                console.log(updateSupplier())
            }else if(respuesta==5){
                console.log("Se regreso al menu principal:");
                menuSuppliers=false
            }
        }

    }else if(opcion==3){// se muestra el menu de orders
        var Bucleorder=true
        while (Bucleorder==true){
            console.log("Menu orders")
            console.log("(1) Read")
            console.log("(2) Delete")
            console.log("(3) create")
            console.log("(4) update")
            console.log("(5) Return to the main menu ")
            respuesta=prompt("Ingrese la opción deseada:");
            if (respuesta==1){
                console.log(viewOrders())
            }else if(respuesta==2){
                console.log(deleteOrder())
            }else if(respuesta==3){
                console.log(addOrder())
            }else if(respuesta==4){
                console.log(updateOrder())
            }else if(respuesta==5){
                console.log("Se regreso al menu principal:");
                Bucleorder=false
            }
        }
        
    }else if(opcion==4){
        var bucleStock=true
        while (bucleStock==true){
            console.log("Stock Management")
            console.log("(1) ver productos con poco stock ");
            console.log("(2) Añadir mas stock a un producto");
            console.log("(3) Return to the main menu ")
            var respuesta=prompt("ingrese la opción deseada:");
            if (respuesta==1){
                console.log(checkStockLevels())
            }else if(respuesta==2){
                console.log(restockProduct())
            }else if (respuesta==3){
                console.log("Se regreso al menu principal")
                bucleStock=false
            }
        }
    }else if(opcion==5){
        console.log("Reporting")
        console.log(generateSalesReport())
    }else if(opcion==6){
        console.log()
    }else if(opcion==7){
        console.log("Se finalizo el programa")
        buclePrincipal=false
        
    }

    

}
// Programa Desarrollado por Camilo Machuca Vega Grupo: T2
