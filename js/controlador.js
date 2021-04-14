async function getAll(pUrl) {
    let url = pUrl
    let peticion = await fetch(url, { method: 'GET' });
    if (peticion.status == 200) {
        let json = await peticion.json();
        let pagenext = json.next;
        let pageprev = json.previous;
        console.log(json.results);
        printResults(json.results, pageprev, pagenext);
    }

}

getAll('https://swapi.dev/api/people/?page=1')


async function getOne(pUrl, pType = "people") {
    let peticion = await fetch(pUrl, { method: 'GET' })
    if (peticion.status == 200) {
        let json = await peticion.json();
        console.log(json);
        if (pType == "people") {
            printCharacter(json);
        } else {
            printFilm(json);
        }
    }
}
