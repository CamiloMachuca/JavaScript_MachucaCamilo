
document.getElementById('enviar').addEventListener('click',function(){
    const id=document.getElementById('idbusqueda').value;
    fetch(`https://superheroapi.com/api.php/a17b7d1498b611a8a388687a1db1da5b/${id}`)
    .then(Response => Response.json())
    .then(Data => {
        var nuevosdatos=`
        <table class="table">
                <thead>
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">powerstats</th>
                    <th scope="col">biography</th>
                    <th scope="col">appearance</th>
                    <th scope="col">work</th>
                    <th scope="col">connections</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="col">${Data.id}</th>
                    <td scope="row">${Data.name}</td>
                    <td scope="col">
                    <p>intelligence ${Data.powerstats.intelligence}</p>
                    <p>strength ${Data.powerstats.strength}</p>
                    <p>speed ${Data.powerstats.speed}</p>
                    <p>durability ${Data.powerstats.durability}</p>
                    <p>power ${Data.powerstats.power}</p>
                    <p>combat ${Data.powerstats.combat}</p>
                    </td>
                    <td scope="col">
                    <p>${Data.biography["full-name"]}</p>
                    <p>${Data.biography["alter-egos"]}</p>
                    <p>${Data.biography["aliase"]}</p>
                    <p>${Data.biography["place-of-birth"]}</p>
                    <p>${Data.biography["first-appearance"]}</p>
                    <p>${Data.biography["publisher"]}</p>
                    <p>${Data.biography["alignment"]}</p>
                    </td>
                    
                    <td scope="col">
                    <p>${Data.appearance["gender"]}</p>
                    <p>${Data.appearance["race"]}</p>
                    <p>${Data.appearance["height"]}</p>
                    <p>${Data.appearance["weight"]}</p>
                    <p>${Data.appearance["eye-color"]}</p>
                    <p>${Data.appearance["hair-color"]}</p>
                    </td>
                    <td scope="col">
                    <p>${Data.work["occupation"]}</p>
                    <p>${Data.work["base"]}<p>
                    </td>
                    <td scope="col">
                    <p>${Data.connections["group-affiliation"]}</p>
                    <p>${Data.connections["relatives"]}</p>
                    </td>
                    <td scope="col">
                    <img src="${Data.image.url}" alt="">
                    </td>

                    



                  </tr>
                 
                </tbody>
              </table>
        `
        document.getElementById('datoss').innerHTML=nuevosdatos

})


})




