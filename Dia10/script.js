document.getElementById('enviar').addEventListener('click', function () {// función para buscar la perosna por su id 
    const id = document.getElementById('idbusqueda').value;

    fetch(`https://api.disneyapi.dev/character/${id}`)//Se accede a los datos de esa persona 
    .then(Response => Response.json())
    .then(Datos => {
        let datosOrdenados = `
        
        <img id="imagen" src="${Datos["data"]["imageUrl"]}" alt="">
        <p>  ${Datos["data"]["films"]}

        <p id="Idd"> ${Datos["data"]["_id"]} </p>
        <p id="Personajes">  ${Datos["data"]["name"]} </p>
        
        <p id="Create"> ${Datos["data"]["createdAt"]}
        <p id="VideoGames"> ${Datos["data"]["videoGames"]}</p>
        <p id="Cortos"> ${Datos["data"]["shortFilms"]}</p>

        `
        document.getElementById('datoss').innerHTML = datosOrdenados// Se imprimen los datos ordenados 




    })
})
