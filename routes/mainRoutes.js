const express = require('express')
const router = express.Router()
const Plg = require('../models/poligono')

// Rotas GET
    // Index 
    router.get('/', (req, res) => {
        Plg.findAll({attributes: ['id', 'pontos', 'createdAt', 'updatedAt']}).then((poligons) => {
            res.render('index', {poligons: poligons}) // poligons})
            
        }).catch((erro) => {
            console.log(erro)
            res.render('index', {poligons: null})
        })
        
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