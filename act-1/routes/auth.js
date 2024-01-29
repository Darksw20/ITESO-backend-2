const router = require('express').Router()

router.get('/healthcheck', (req, res) => {
    res.send('Hello Worlds!')
})

module.exports = router