const http = require('http');
const TeamService = require('./service/teamService');

const server = http.createServer(async (req, res) => {
    const { url } = req

    if(url === "/team") {
        const teamService = new TeamService()
        const data = await teamService.get()
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data))
        res.end()
    } else {
        res.write("hello world")
        res.end()
    }
})

server.listen(3000)
