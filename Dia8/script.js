
document.getElementById('enviar').addEventListener('click', function () {
    const id = document.getElementById('idbusqueda').value;

    fetch(`https://swapi.py4e.com/api/people/${id}`)
    .then(Response => Response.json())
    .then(Data => {
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
        <p>name: ${Data.homeworld.name}</p>
        <p>rotation_period: ${Data.homeworld.rotation_period}</p>
        <p>orbital_period: ${Data.homeworld.rotation_period}</p>
        <p>diameter: ${Data.homeworld.diameter}</p>
        <p>climate: ${Data.homeworld.climate}</p>
        <p>gravity: ${Data.homeworld.gravity}</p>
        <p>terrain: ${Data.homeworld.terrain}</p>
        <p>surface_water: ${Data.homeworld.surface_water}</p>
        <p>population: ${Data.homeworld.population}</p>
        <p>created: ${Data.homeworld.created}</p>
        <p>Edited: ${Data.homeworld.edited}</p>
        <p>url: ${Data.homeworld.url}</p>
        </td>
        </td>
        </table></td>
        
        </tr>
        <tr class="table-dark">
        <td scope:"row"><strong>homeworld:</strong>
        <td scope="col">
        <table class="table" id="tablados">
        <td scope="col">
        <p>name: ${Data.homeworld.name}</p>
        <p>rotation_period: ${Data.homeworld.rotation_period}</p>
        <p>orbital_period: ${Data.homeworld.rotation_period}</p>
        <p>diameter: ${Data.homeworld.diameter}</p>
        <p>climate: ${Data.homeworld.climate}</p>
        <p>gravity: ${Data.homeworld.gravity}</p>
        <p>terrain: ${Data.homeworld.terrain}</p>
        <p>surface_water: ${Data.homeworld.surface_water}</p>
        <p>population: ${Data.homeworld.population}</p>
        <p>created: ${Data.homeworld.created}</p>
        <p>Edited: ${Data.homeworld.edited}</p>
        <p>url: ${Data.homeworld.url}</p>
        </td>
        </td>
        </table></td>
        
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
    
    </table>

    `
            document.getElementById('datoss').innerHTML = datosOrdenados
        })
})