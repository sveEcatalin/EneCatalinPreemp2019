// async function pokeName() {

//     // read our JSON
//     let rawResponse = await fetch('https://pokeapi.co/api/v2/pokemon/');
//     let response = await rawResponse.json();




//     // for(let i=0; i<response.results.length;i++){
//     //     console.log(response.results[i].name);
//     // }


//     for await (let pokemon of response.results) {
//         console.log(pokemon.name);
//       }

// }

// pokeName();


async function nameId(){

  let rawResponse=await fetch('https://pokeapi.co/api/v2/pokedex/1/');
  let response=await rawResponse.json();

  for await(let pokemon of response["pokemon_entries"]){

    // console.log(pokemon);
    console.log("ID " + pokemon.entry_number + " NAME "+pokemon.pokemon_species.name);
  }

}

nameId();