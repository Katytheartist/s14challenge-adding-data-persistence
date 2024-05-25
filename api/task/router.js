// build your `/api/tasks` router here

//resources router

const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res, next)=>{

    Task.getAll()
    .then(tasks =>{
        //throw new Error('Arrrrghhhhh!')
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/', (req, res, next)=>{
    Task.create(req.body)
    .then(newtask =>{
        res.status(201).json(newtask)
    })
    .catch(next)
})

router.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went bang in the task router',
        message: err.message,
        stack: err.stack,
    })
    //.catch(next)
})

module.exports = router