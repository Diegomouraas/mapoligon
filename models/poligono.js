const db = require('./msqlConf')

const Plg = db.sequelize.define('plg', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    pontos: {
        type: db.Sequelize.JSON
    }
})

/*Plg.sync({force:true})
    .then(() => console.log('Tabela Plg Criada com sucesso!'))
    .catch(err => console.log('Erro ao Criar a tabela Plg: ', err))
*/