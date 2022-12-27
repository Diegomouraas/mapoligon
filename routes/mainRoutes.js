const express = require('express')
const router = express.Router()
const Plg = require('../models/poligono')

// Rotas GET
    // Index 
    router.get('/', (req, res) => {
        Plg.findAll().then((poligons) => {
            res.render('index', {poligons: poligons})
            
        }).catch((erro) => {
            console.log(erro)
            res.render('index', {poligons: null})
        })
        
    })

    router.get('/plgs', (req, res) => {
        Plg.findAll().then((poligons) => {
            res.send(JSON.stringify(poligons))
            
        }).catch((erro) => {
            console.log(erro)
            res.status(200).json({})
        })
        
    })

    // Map 
    router.get('/map', (req, res) => {
        res.render('map')
    })

    router.post('/map/npol', (req, res) => {
        console.log(req.body)

        Plg.create({
            pontos: req.body[1],
            vellim: req.body[0].vellim
        })
        res.status(200)
        res.send('save')
    })

// Export 
module.exports = router