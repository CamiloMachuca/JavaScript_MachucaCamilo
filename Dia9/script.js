document.getElementById('enviar').addEventListener('click', function () {// función para buscar la perosna por su id 
    const id = document.getElementById('idbusqueda').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)//Se accede a los datos de esa persona 
    .then(Response => Response.json())
    .then(Data => {
            let datoss=`
            <img id="imagenn" src="${Data.sprites.other.showdown.front_default}" alt="">
            <p>${Data.id}-${Data.name}</p>
            
        
            `
            document.getElementById('datoss').innerHTML = datoss// Se imprimen los datos ordenados 


    })
    


})