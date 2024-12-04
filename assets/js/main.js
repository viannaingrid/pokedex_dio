const pokemonsList = document.getElementById('pokemonsList')
const loadMore = document.getElementById('loadMore')

maxRecords = 151
const limit = 5
let offset = 0;


function loadPokemonItens (offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => 
            `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
            `
        ).join('')
        pokemonsList.innerHTML += newHtml

    })
}

loadPokemonItens(offset, limit)

loadMore. addEventListener('click', () => {
    offset += limit
    
    const qtdRecordNextPage = offset - limit

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadPokemonItens(offset, limit)  
    }

})