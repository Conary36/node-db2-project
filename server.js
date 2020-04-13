const express = require('express')
const helmet = require('helmet')
const carsRouter = require('./router/carsRouter')
const server = express()
const cors = require('cors')

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use('', carsRouter)

module.exports = server;