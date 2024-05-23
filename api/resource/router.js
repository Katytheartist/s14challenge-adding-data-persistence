
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next)=>{
    Resource.getResources()
    .then(resources =>{
        res.status(200).json(resources)
    })
    .catch(next)
})

router.use((err, req, res, next)=>{ //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went bang in the resource router',
        message: err.message,
        stack: err.stack,
    })
    //.catch(next)
})

module.exports = router