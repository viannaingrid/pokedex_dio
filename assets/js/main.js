function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
            <img src="assets/img/bulbasaur.png" alt="${pokemon.name}">
        </div>
    </li>
    `
}

const pokemonsList = document.getElementById('pokemonsList')


pokeApi.getPokemons().then((pokemons = []) => {

    pokemonsList.innerHTML += pokemons.map(convertPokemonToLi).join('')

})