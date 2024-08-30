
document.getElementById('enviar').addEventListener('click',function(){
    const id=document.getElementById('idbusqueda').value;
    fetch(`https://superheroapi.com/api.php/a17b7d1498b611a8a388687a1db1da5b/${id}`)
    .then(Response => Response.json())
    .then(Data => {

        document.getElementById('datoss').innerHTML=JSON.stringify(Data,null,2);

})


})




