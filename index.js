const express = require('express')
const routes = require('./routes')

const server = express()
const port = 5000
server.use(express.json())
server.use('/api/v1',routes)

server.listen(port, ()=> console.log("Server is running on port 5000"))