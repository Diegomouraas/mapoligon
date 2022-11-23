const express = require('express')
const router = express.Router()

// Rotas GET
    // Index 
    router.get('/', (req, res) => {
        res.render('index')
    })

    // Map 
    router.get('/map', (req, res) => {
        res.render('map')
    })

// Export 
module.exports = router