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

function addProduct() {
    console.log("Ingrese los datos del nuevo producto")
    var nuevoId=prompt("Ingrese el id:")
    var nuevonName=prompt("Ingrese el nombre:")
    var nuevoCategory=prompt("Ingrese la categoria:")
    var nuevoPrice=prompt("Ingrese el precio:")
    var nuevoQuantityInstock=prompt("Ingrese la cantidad")
    var nuevoSupplierId=prompt("ingrese el id del proveedor")
    var product={
        "id": nuevoId,
        "name": nuevonName,
        "category": nuevoCategory,
        "price": nuevoPrice,
        "quantityInStock": nuevoQuantityInstock,
        "supplierId": nuevoSupplierId
    }
    datos.push(product)
    return product


}
function viewProducts(){
    console.log("###################################")
    console.log("-------------Product--------------")
    console.log("###################################")
    for (var produ of datos[0]["products"]){
        console.log("id:",produ.id);
        console.log("name:",produ.name);
        console.log("category", produ.category);
        console.log("price", produ.price);
        console.log("quantityInStock", produ.quantityInStock);
        console.log("supplierId", produ.supplierId);

    }
}
function deleteProduct(){
    buscarId=prompt("Ingrese el id del produc a eliminar:");
    for (var produ of datos[0]["products"]){
        if (buscarId==produ){
            produ.pop()
            console.log("id:",produ.id);
            console.log("name:",produ.name);
            console.log("category", produ.category);
            console.log("price", produ.price);
            console.log("quantityInStock", produ.quantityInStock);
            console.log("supplierId", produ.supplierId);
            
        }
    }
    

}
console.log(datos);
var buclePrincipal = true
while (buclePrincipal == true){

    console.log("##########################");
    console.log("Menu principal");
    console.log("##########################");
    console.log("(1) products");
    console.log("(2) suppliers");
    console.log("(3) orders");
    console.log("(4) Finalizar")
    opcion=prompt("Ingrese la opción deseada:");

    if (opcion==1){
        console.log("Menu products")
        console.log("(1) Read")
        console.log("(2) Delete")
        console.log("(3) create")
        console.log("(4) update")
        respuesta=prompt("Ingrese la opción de ingreso:");
        if (respuesta==1){
            console.log(viewProducts())
        }else if(respuesta==2){
            console.log=(deleteProduct())

        }else if (respuesta==3){
            console.log(addProduct())
        }

    }else if(opcion==4){

        console.log("Se finalizo el programa")
        buclePrincipal=false
    }

    

}
