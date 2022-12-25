const express = require('express')
const router = express.Router()
const Plg = require('../models/poligono')

// Rotas GET
    // Index 
    router.get('/', (req, res) => {
        res.render('index')
    })

    // Map 
    router.get('/map', (req, res) => {
        res.render('map')
    })

    router.post('/map/npol', (req, res) => {
        console.log(req.body)
        const nPlg = new Plg({
            pontos: req.body
        })

        Plg.create({
            pontos: req.body
        })
        res.status(200)
        res.send('save')
    })

// Export 
module.exports = router