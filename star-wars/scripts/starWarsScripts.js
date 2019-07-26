
async function getMovies() {

    let rawResponse = await fetch('https://swapi.co/api/films/');
    let response = await rawResponse.json();

    // await console.log(response);

    for await (let movie of response.results) {



        var uri = document.createElement("a");
        let node = document.createTextNode(`${movie.title}`);
        uri.appendChild(node);
        document.body.appendChild(uri);
        uri.setAttribute("href", `movies.html?id=${movie.episode_id}`);
        uri.setAttribute("class", "block-class");

 

    }

}

getMovies();

