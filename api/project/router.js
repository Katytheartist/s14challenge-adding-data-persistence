// build your `/api/projects` router here

const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next)=>{
    Project.getAll()
    .then(projects =>{
        //throw new Error('Arrrrghhhhh!')
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next)=>{
    Project.create(req.body)
    .then(newProject =>{
        res.status(201).json(newProject)
    })
    .catch(next)
})

router.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went bang in the project router',
        message: err.message,
        stack: err.stack,
    })
    //.catch(next)
})

module.exports = router