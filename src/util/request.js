const https = require('https')

function request(url) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let chunks = []
            res.on('data', chunk => {
                chunks.push(chunk)
            })

            res.on('end', () => {
                const data = Buffer.concat(chunks).toString();
                resolve(JSON.parse(data));
            })
        }).on('error', error => {
            reject(error)
        })
    })
}

module.exports = request;