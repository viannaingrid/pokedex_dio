const pokeApi = {}

pokeApi.getPokemons = (offset = 10, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

}