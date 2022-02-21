const TeamRepository = require('./../repository/teamRepository');
class TeamService {
    constructor() {
        this.teamRepository = new TeamRepository();
    }

    async get() {
        const data = await this.teamRepository.findRandomPokemons()
        const reponse = data.map(pokemon => {
            const { name, moves } = pokemon
            const [moveOne, moveTwo, moveTree] = moves.slice(0,3)
            return { name, moves: [moveOne.move.name, moveTwo.move.name, moveTree.move.name] }
        })
        
        return reponse
    }
}

module.exports = TeamService;