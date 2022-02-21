const http = require('http');
const TeamRepository = require('./repository/teamRepository');

const server = http.createServer((req, res) => {
    const { url } = req

    if(url === "/team") {
        const teamRepository = new TeamRepository()
        teamRepository.findRandomPokemons()
        res.write("team")
        res.end()
    } else {
        res.write("hello world")
        res.end()
    }
})

server.listen(3000)
