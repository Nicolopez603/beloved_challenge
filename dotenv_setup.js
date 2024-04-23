const fs = require('fs')
const path = require('path')

const envPath = path.join(__dirname, 'cypress.env.json')
const envData = JSON.parse(fs.readFileSync(envPath, 'utf8'))

for (const key in envData) {
    process.env[key] = envData[key]
}
