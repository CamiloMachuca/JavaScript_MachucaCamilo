document.getElementById('button1').addEventListener('click', getDataFromApi);
function getDataFromApi(){
    fetch('')
    .then(res=> res.json())
    .then(data=>{
        console.log(typeof(data));
        console.log(data[0]['https://superheroapi.com/api.php/a17b7d1498b611a8a388687a1db1da5b/ 2'])
        let output='';
        data.forEach(function(user){
            output+=`<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML=output;
    })
}

var Idbusqueda= document.getElementById('IDbusqueda').value;
