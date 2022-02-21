const request = require('../util/request')

class TeamRepository {
    constructor() {
        this.pokemons = []
    }
    
    async getRandomPokemons() {
       const data =  await  request("https://pokeapi.co/api/v2/pokemon?limit=150")
       const shuffledArray = data.results.sort(() => 0.5 - Math.random())
       const selectedPokemons = shuffledArray.slice(0, 3)
       return selectedPokemons
    }

    async findRandomPokemons() {
        const pokemons = await this.getRandomPokemons()
        const findOne = await request(pokemons[0].url)
        const findTwo = await request(pokemons[1].url)
        const findThree = await request(pokemons[2].url)
        Promise.all([findOne, findTwo, findThree]).then((values) => {
            console.log(values.name);
        });
    }
}

module.exports = TeamRepository;