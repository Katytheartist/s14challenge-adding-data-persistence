const router = require('express').Router()

router.use((err, req, res, next)=>{ 
    res.status(500).json({
        customMessage: 'something went bang in the resource router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router