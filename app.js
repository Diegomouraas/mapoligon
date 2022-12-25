// Importando modulos
const express = require('express')
const rotas = require('./routes/mainRoutes')
const app = express()
const bodyParser = require('body-parser')

// View Engine
    app.set('view engine', 'ejs')
    app.set('views', 'views')

// middlewares
    app.use(express.static("public"))

// bodyParser
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

// Rotas
    app.use('/', rotas)


// listen
const port = process.env.PORT || 1434
app.listen(port, () => {
    console.log('Servidor aberto! porta: ' + port)
})