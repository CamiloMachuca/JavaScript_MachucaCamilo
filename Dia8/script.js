
document.getElementById('enviar').addEventListener('click', function () {// función para buscar la perosna por su id 
    const id = document.getElementById('idbusqueda').value;

    fetch(`https://swapi.py4e.com/api/people/${id}`)//Se accede a los datos de esa persona 
    .then(Response => Response.json())
    .then(Data => {
        var uurl= Data.homeworld// Se guarda el url de homeworld
        var urrllm= Data.films// Se guardan los url de films
        var urlEspecie=Data.species// Se guardan los url de films
        var urlVehicles=Data.vehicles// Se guardan los url de films
        var urlStarships=Data.starships// Se guardan los url de films
        
        fetch(uurl)//Se accede a los datos de la url de homeworld
        .then(Response => Response.json())
        .then(Dataaa => {// Se ordenan los datos y se guardan en una variable para luego mostrarla 
            
            let datosOrdenados = `
            
        <table id="TablaPrincipal" class="table ">

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
            <th scope:"row">Hair color:</th>
            <td scope="col">${Data.hair_color}</td>
            </tr>

            <tr class="table-dark">
            <th scope:"row">Eye color:</th>
            <td scope="col">${Data.eye_color}</td>
            </tr>
        
            <tr class="table-dark">
            <th scope:"row">Skin color:</th>
            <td scope="col">${Data.skin_color}</td>
            </tr>
            
            <tr class="table-dark">
            <th scope:"row">Birth year:</th>
            <td scope="col">${Data.birth_year}</td>
            </tr>
            <tr class="table-dark">
            <th scope:"row">Gender:</th>
            <td scope="col">${Data.gender}</td>
            </tr>
            <tr class="table-dark">
            <td scope:"row"><strong>homeworld:</strong>
            <td scope="col">
            <table class="table borderedondo" id="tablados">
            <td scope="col">
            <p>Name: ${Dataaa.name}</p>
            <p>Rotation period: ${Dataaa.rotation_period}</p>
            <p>Orbital period: ${Dataaa.orbital_period}</p>
            <p>Diameter: ${Dataaa.diameter}</p>
            <p>Climate: ${Dataaa.climate}</p>
            <p>Gravity: ${Dataaa.gravity}</p>
            <p>Terrain: ${Dataaa.terrain}</p>
            <p>Surface water: ${Dataaa.surface_water}</p>
            <p>Population: ${Dataaa.population}</p>
            <p>Created: ${Dataaa.created}</p>
            <p>Edited: ${Dataaa.edited}</p>
            <p>Url: ${Dataaa.url}</p>
            </td>
            </table>
            </td>
            </tr>

            <tr class="table-dark">
            <td scope:"row"><strong>films:</strong>
            <td scope="col">
            <div class="contenedorrr" id="filmsContenedor"></div>
            </td>
            </td>
            </tr>

            <tr class="table-dark">
            <td scope:"row"><strong>species:</strong>
            <td scope="col">
            <div id="speciesContenedor"></div>
            </td>
            </td>
            </tr>

            <tr class="table-dark">
            <td scope:"row"><strong>vehicles:</strong>
            <td scope="col">
            <div id="contenedorVehicles"></div>
            </td>
            </td>
            </tr>

            <tr class="table-dark">
            <td scope:"row"><strong>starships:</strong>
            <td scope="col">
            <div id="contenedorStarships"></div>
            </td>
            </td>
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
            <th scope:"row">Url:</th>
            <td scope="col">${Data.url}</td>
            </tr>
        
        </table>

    `
    document.getElementById('datoss').innerHTML = datosOrdenados// Se imprimen los datos ordenados 

    urrllm.forEach(urllm => {// Funcion para acceder a los datos de cada url que este almacenada en la variable urrllm
        fetch(urllm)
        .then(Response=> Response.json())
        .then(Dataaa2=>{
            let nuevosDatos =`
            
            <table class="table" id="tablados3">
            <td scope="col">
            <p>Name: ${Dataaa2.title}</p>
            <p>Episode id: ${Dataaa2.episode_id}</p>
            <p>Opening crawl: ${Dataaa2.opening_crawl}</p>
            <p>Director: ${Dataaa2.director}</p>
            <p>Producer: ${Dataaa2.producer}</p>
            <p>Release date: ${Dataaa2.release_date}</p>
            <p>Created: ${Dataaa2.created}</p>
            <p>Edited: ${Dataaa2.edited}</p>
            <p>Url: ${Dataaa2.url}</p>
            </td>
            </table>

            `
            document.getElementById('filmsContenedor').innerHTML+=nuevosDatos;

        })
        });
        fetch(urlEspecie)// se extrae los datos de la url que se encuentra dentro de la variable urlEspecie 
        .then(Response=> Response.json())
        .then(Dataa3=>{
            let datosSpecies=`
            
            <table class="table" id="tablados">
            <td scope="col">
            <p>name: ${Dataa3.name}</p>
            <p>Classification: ${Dataa3.classification}</p>
            <p>Designation: ${Dataa3.designation}</p>
            <p>Average height: ${Dataa3.average_height}</p>
            <p>Skin colors: ${Dataa3.skin_colors}</p>
            <p>Hair colors: ${Dataa3.hair_colors}</p>
            <p>Eye colors: ${Dataa3.eye_colors}</p>
            <p>Average lifespan: ${Dataa3.average_lifespan}</p>
            <p>Language: ${Dataa3.language}</p>
            <p>created: ${Dataa3.created}</p>
            <p>Edited: ${Dataa3.edited}</p>
            <p>url: ${Dataa3.url}</p>
            </td>
            </table>
            `
            document.getElementById('speciesContenedor').innerHTML+=datosSpecies;

        })
        urlVehicles.forEach(Vehicles => {// Funcion para acceder a los datos de cada url que este almacenada en la variable urlVehicles
            fetch(Vehicles)
            .then(Response=> Response.json())
            .then(Dataa4=>{
                let DatosVehicles =`
                
                <table class="table" id="tablados3">
                <td scope="col">
                <p>Name: ${Dataa4.name}</p>
                <p>Model: ${Dataa4.model}</p>
                <p>Manufacturer: ${Dataa4.manufacturer}</p>
                <p>Cost in credits: ${Dataa4.cost_in_credits}</p>
                <p>Length: ${Dataa4.length}</p>
                <p>Max atmosphering speed: ${Dataa4.max_atmosphering_speed}</p>
                <p>crew: ${Dataa4.crew}</p>
                <p>Passengers: ${Dataa4.passengers}</p>
                <p>Cargo capacity: ${Dataa4.cargo_capacity}</p>
                <p>Consumables: ${Dataa4.consumables}</p>
                <p>Vehicle class: ${Dataa4.vehicle_class}</p>
                <p>Created: ${Dataa4.created}</p>
                <p>Edited: ${Dataa4.edited}</p>
                <p>Url: ${Dataa4.url}</p>

                </td>
                </table>
    
                `
                document.getElementById('contenedorVehicles').innerHTML+=DatosVehicles;
    
            })
            });
            urlStarships.forEach(Starships => {// Funcion para acceder a los datos de cada url que este almacenada en la variable urlStarships
                fetch(Starships)
                .then(Response=> Response.json())
                .then(Dataa5=>{
                    let DatosStarships =`
                    
                    <table class="table" id="tablados3">
                    <td scope="col">
                    <p>Name: ${Dataa5.name}</p>
                    <p>Model: ${Dataa5.model}</p>
                    <p>Manufacturer: ${Dataa5.manufacturer}</p>
                    <p>Cost in credits: ${Dataa5.cost_in_credits}</p>
                    <p>Length: ${Dataa5.length}</p>
                    <p>Max atmosphering speed: ${Dataa5.max_atmosphering_speed}</p>
                    <p>crew: ${Dataa5.crew}</p>
                    <p>Passengers: ${Dataa5.passengers}</p>
                    <p>Cargo capacity: ${Dataa5.cargo_capacity}</p>
                    <p>Consumables: ${Dataa5.consumables}</p>
                    <p>Hyperdrive rating: ${Dataa5.hyperdrive_rating}</p>
                    <p>MGLT: ${Dataa5.MGLT}</p>
                    <p>Starship class: ${Dataa5.starship_class}</p>
                    <p>Created: ${Dataa5.created}</p>
                    <p>Edited: ${Dataa5.edited}</p>
                    <p>Url: ${Dataa5.url}</p>

    
                    </td>
                    </table>
        
                    `
                    document.getElementById('contenedorStarships').innerHTML+=DatosStarships;
        
                })
                });
        
        
    })
})
})
//Progama desarrollado por Camilo Machuca Vega Grupo:T2
        