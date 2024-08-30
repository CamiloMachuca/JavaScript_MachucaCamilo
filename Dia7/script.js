
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
                    <p><strong>intelligence</strong> ${Data.powerstats.intelligence}</p>
                    <p><strong>strength</strong> ${Data.powerstats.strength}</p>
                    <p><strong>speed </strong>${Data.powerstats.speed}</p>
                    <p><strong>durability </strong>${Data.powerstats.durability}</p>
                    <p><strong>power </strong>${Data.powerstats.power}</p>
                    <p><strong>combat </strong>${Data.powerstats.combat}</p>
                    </td>
                    <td scope="col">
                    <p><strong>Full-name:</strong> ${Data.biography["full-name"]}</p>
                    <p><strong>Alter-egos:</strong> ${Data.biography["alter-egos"]}</p>
                    <p><strong>Aliase</strong>${Data.biography["aliase"]}</p>
                    <p><strong>place-of-birth:</strong> ${Data.biography["place-of-birth"]}</p>
                    <p><strong>first-appearance:</strong> ${Data.biography["first-appearance"]}</p>
                    <p><strong>publisher: </strong>${Data.biography["publisher"]}</p>
                    <p><strong>alignment:</strong> ${Data.biography["alignment"]}</p>
                    </td>
                    
                    <td scope="col">
                    <p><strong>gender:</strong>${Data.appearance["gender"]}</p>
                    <p><strong>race:</strong> ${Data.appearance["race"]}</p>
                    <p><strong>height:</strong>${Data.appearance["height"]}</p>
                    <p><strong>weight:</strong>${Data.appearance["weight"]}</p>
                    <p><strong>eye-color:</strong>${Data.appearance["eye-color"]}</p>
                    <p><strong>hair-color:</strong>${Data.appearance["hair-color"]}</p>
                    </td>
                    <td scope="col">
                    <p><strong>occupation:</strong> ${Data.work["occupation"]}</p>
                    <p><strong>base: </strong>${Data.work["base"]}<p>
                    </td>
                    <td scope="col">
                    <p><strong>group-affiliation:</strong>${Data.connections["group-affiliation"]}</p>
                    <p><strong>relatives:</strong>${Data.connections["relatives"]}</p>
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




