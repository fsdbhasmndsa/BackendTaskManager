const express = require('express')
const database = require("./config/Database")
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const crosConfig = {
  origin:"*",
  Credential:true,
  methods:["GET","POST","PUT","DELETE","PATCH"]
}

const app = express()
app.options("",cors(crosConfig))
app.use(cors(crosConfig))
const Router = require("./router/indexRouter")
const port = process.env.PORT || 5000
database.connect();





app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

Router(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})