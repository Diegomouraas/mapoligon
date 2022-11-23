// Importando modulos
const express = require('express')
const rotas = require('./routes/mainRoutes')
const app = express()

// View Engine
    app.set('view engine', 'ejs')
    app.set('views', 'views')

// middlewares
    app.use(express.static("public"))

// Rotas
    app.use('/', rotas)


// listen
const port = process.env.PORT || 1434
app.listen(port, () => {
    console.log('Servidor aberto! porta: ' + port)
})