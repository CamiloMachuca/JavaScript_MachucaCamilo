
fetch('https://randomuser.me/api/')
.then(Response => Response.json())
.then(Data=>{
    document.getElementById('imagennn').innerHTML+= ` <img id="imagennn" src="${Data.results[0].picture.large}" > `
})