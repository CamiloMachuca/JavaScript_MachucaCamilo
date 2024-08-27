document.getElementById('button1').addEventListener('click', obtenerMenuProducts);
function obtenerMenuProducts(){
    document.write("---------------")
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
