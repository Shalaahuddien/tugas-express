const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')
const Role = db.role

corsOptions = {
    origin: 'http://localhost:3000'
  }
  
  app.use(cors(corsOptions))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))
  app.get('/', (req, res) => {
    res.json({ message: 'welcome to bezkoder application'})
  })
  
  db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and resync DB')
    initial()
  })
  
  function initial(){
    Role.create({
      id: 1,
      name: 'user'
    })
    Role.create({
      id: 2,
      name: 'moderator'
    })
    Role.create({
      id: 3,
      name: "admin"
    });
  }

  require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
