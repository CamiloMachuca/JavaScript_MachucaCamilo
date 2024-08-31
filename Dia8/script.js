
document.getElementById('enviar').addEventListener('click', function () {
    const id = document.getElementById('idbusqueda').value;

    fetch(`https://swapi.py4e.com/api/people/${id}`)
    .then(Response => Response.json())
    .then(Data => {
        var uurl= Data.homeworld
        var urrllm= Data.films
        
        fetch(uurl)
        .then(Response => Response.json())
        .then(Dataaa => {
            
            let datosOrdenados = `
        <table class="table">

            <tr class="table-dark">
            <th scope="col">Nombre:</th>
            <td scope="col">${Data.name}</th>
            </tr>

            <tr class="table-dark">
            <th scope:"row">Height:</th>
            <td scope="col">${Data.height}</td>
            </tr>
        
            <tr class="table-dark">
            <th scope:"row">Mass:</th>
            <td scope="col">${Data.mass}</td>
            </tr>
        
            <tr class="table-dark">
            <th scope:"row">Hair_color:</th>
            <td scope="col">${Data.hair_color}</td>
            </tr>
        
            <tr class="table-dark">
            <th scope:"row">Skin_color:</th>
            <td scope="col">${Data.skin_color}</td>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Eye_color:</th>
            <td scope="col">${Data.eye_color}</td>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Birth_year:</th>
            <td scope="col">${Data.birth_year}</td>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Gender:</th>
            <td scope="col">${Data.gender}</td>
            </tr>
            <tr class="table-dark">
            <td scope:"row"><strong>homeworld:</strong>
            <td scope="col">
            <table class="table" id="tablados">
            <td scope="col">
            <p>name: ${Dataaa.name}</p>
            <p>rotation_period: ${Dataaa.rotation_period}</p>
            <p>orbital_period: ${Dataaa.orbital_period}</p>
            <p>diameter: ${Dataaa.diameter}</p>
            <p>climate: ${Dataaa.climate}</p>
            <p>gravity: ${Dataaa.gravity}</p>
            <p>terrain: ${Dataaa.terrain}</p>
            <p>surface_water: ${Dataaa.surface_water}</p>
            <p>population: ${Dataaa.population}</p>
            <p>created: ${Dataaa.created}</p>
            <p>Edited: ${Dataaa.edited}</p>
            <p>url: ${Dataaa.url}</p>
            </td>
            </table>
            </td>
            </tr>

            <tr class="table-dark">
            <td scope:"row"><strong>films:</strong>
            <td scope="col">
            <table class="table" id="tablados">
            <td scope="col">
            <div id="filmsContenedor"></div>
            </td>
            </table>
            </td>
            </tr>
            
            
            <tr class="table-dark">
            <th scope:"row">species:</th>
            </tr>
            <tr class="table-dark">
            <th scope:"row">vehicles:</th>
            </tr>
            <tr class="table-dark">
            <th scope:"row">starships:</th>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Created:</th>
            <td scope="col">${Data.created}</td>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Edited:</th>
            <td scope="col">${Data.edited}</td>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Edited:</th>
            <td scope="col">${Data.url}</td>
            </tr>
        
        </table>

    `
    document.getElementById('datoss').innerHTML = datosOrdenados

    urrllm.forEach(urllm => {
        fetch(urllm)
        .then(Response=> Response.json())
        .then(Dataaa2=>{
            let nuevosDatos =`
            <tr class="table">
            <td scope="col">
            <p>Name: ${Dataaa2.title}</p>
            <p>Episode_id: ${Dataaa2.episode_id}</p>
            <p>opening_crawl: ${Dataaa2.opening_crawl}</p>
            <p>director: ${Dataaa2.director}</p>
            <p>producer: ${Dataaa2.producer}</p>
            <p>release_date: ${Dataaa2.release_date}</p>
            <p>created: ${Dataaa2.created}</p>
            <p>edited: ${Dataaa2.edited}</p>
            <p>url: ${Dataaa2.url}</p>
            </td>
            </tr>
            
            `
            document.getElementById('filmsContenedor').innerHTML+=nuevosDatos;

        })
        });
        
    })
})
})
        