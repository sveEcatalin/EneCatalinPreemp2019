async function pokeName() {

    // read our JSON
    let rawResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let response = await rawResponse.json();




    // for(let i=0; i<response.results.length;i++){
    //     console.log(response.results[i].name);
    // }


    for await (let pokemon of response.results) {
        console.log(pokemon.name);
      }

}

pokeName();