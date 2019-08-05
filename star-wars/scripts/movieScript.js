

async function getMovies() {
    let movieId = window.location.search;

    let titleSelector = document.querySelectorAll(".movie-title");
    let releaseDateSelector = document.querySelectorAll(".movie-release");
    let openingCrawlSelector = document.querySelectorAll(".opening-crawl")

    let rawResponse = await fetch('https://swapi.co/api/films/');
    let response = await rawResponse.json();

    // await console.log(response);

    for await (let movie of response.results) {



        movieId = getOnlyNumbers(movieId);

        if (movie.episode_id == movieId) {

            titleSelector[0].innerHTML = movie.title;
            releaseDateSelector[0].innerHTML = movie.release_date;
            openingCrawlSelector[0].innerHTML = movie.opening_crawl;




            for await (let character of movie.characters) {
                // console.log(character);
                let charRaw = await fetch(character);
                let charData = await charRaw.json();

                // console.log(charData);
                // console.log("THE NAME IS " + charData.name);
                // console.log("THE GENDER IS " + charData.gender);
                // // console.log("THE SPECIES IS"+charData.species);
                // console.log("THE HOMEWORLD IS " + charData.homeworld);


                let worldUrl = charData.homeworld;
                let rawHomeWorld = await fetch(worldUrl);
                let homeWorldData = await rawHomeWorld.json();


                let speciesUrl = charData.species;
                let rawSpecies = await fetch(speciesUrl);
                let speciesData = await rawSpecies.json();


                var charName = document.createElement("div");
                let node = document.createTextNode(`${charData.name}`)
                charName.appendChild(node);
                document.body.appendChild(charName);
                charName.setAttribute("class", "character-name");


                var charGender = document.createElement("div");
                node = document.createTextNode(`${charData.gender}`)
                charGender.appendChild(node);
                document.body.appendChild(charGender);
                charGender.setAttribute("class", "character-gender");


                var charSpecies = document.createElement("div");
                node = document.createTextNode(`${speciesData.name}`)
                charSpecies.appendChild(node);
                document.body.appendChild(charSpecies);
                charSpecies.setAttribute("class", "character-species");

                var charHome = document.createElement("div");
                node = document.createTextNode(`${homeWorldData.name}`)
                charHome.appendChild(node);
                document.body.appendChild(charHome);
                charHome.setAttribute("class", "character-home");

            }

        }



    }

}

getMovies();


function getOnlyNumbers(searchQ) {
    let movieId = searchQ.match(/\d/g);
    movieId = movieId.join("");
    return movieId;
}
