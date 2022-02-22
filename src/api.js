const http = require('http');
const TeamService = require('./service/teamService');

const routes = {
    '/team:get': async (req, res) => {
        const teamService = new TeamService()
        const data = await teamService.get()
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data))
        return res.end()
    },

    default: (req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.write('Hello World!')
        return res.end()
    }
}

const handle = (req, res) => {
    const { url, method } = req
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default

    return chosen(req, res)
}

const app = http.createServer(handle)
                .listen(3000, () => console.log("server is running", 3000))

module.exports = app