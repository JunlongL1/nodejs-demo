const http = require('http')
const routes = require('./routes')

const sever = http.createServer(routes.handler)

sever.listen(3000)