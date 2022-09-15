
let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

document.getElementById("pokebutton").onclick = function () { getPokemon() };

function getPokemon() {
    let pokeNumber = (Math.floor(Math.random() * 905) + 1);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}/`, requestOptions)
        .then(response => response.json())
        .then(result => {
            document.getElementById("pokeid").innerHTML = `# ${result.id}`;
            document.getElementById("pokeimg").src = result.sprites["front_default"];
            document.getElementById("pokename").innerHTML = result.name;
        })
        .catch(error => console.log('error', error));

    document.getElementById("pokeimg").src = pokeImage;

}


