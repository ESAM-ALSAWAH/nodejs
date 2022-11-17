const express = require("express");
const morgan = require("morgan")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const compression = require('compression')
const db = require('./config/db')
const app = express()
dotenv.config()
/* config */
const port = process.env.PORT
db.mongooseConnect()

/* Middlware */
app.use(morgan("dev"))
app.use(bodyParser({ extended: true }))
/* app.use(compression({
    level: 6,
    threshold: 10 * 1000,
    filter: (req, res) => compression.filter(req, res)
})) */


app.set("view engine", "ejs");
/* routes */

const apis = require('./api/routes');
const path = require("path");
app.use(express.static(path.join(__dirname,'/api/public')))
app.use('/api', apis)
const {webRoutes}=require('./api/web')
webRoutes(app)
/*  */
app.listen(port, () => {
    console.log(`The server run ${port}`)
})