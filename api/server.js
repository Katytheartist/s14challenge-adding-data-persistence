const express = require('express')
const resourceRouter = require('./resource/router')
//const projectRouter = require('./project/router')
//const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/resource', resourceRouter)
//server.use('/api/project', projectRouter)
//server.use('/api/task', taskRouter)

module.exports = server