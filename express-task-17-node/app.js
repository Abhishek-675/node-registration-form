const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');

const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(userRoutes);

sequelize
    // .sync({force: true})
    .sync()
    .then(() => app.listen(3000))
    .catch(err => console.log(err));


