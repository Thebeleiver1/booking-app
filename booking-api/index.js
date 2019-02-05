const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const Config = require('./config/config.json');
const port = Config.port || 4000;
const mongoServer = '127.0.0.1:27017';

const adminRouter = require('./routes/adminRouter');

(mongoose.connect(`mongodb://${mongoServer}/booking`, { useNewUrlParser: true })).then(() => {
    console.log("conee")
})


app.use(morgan('dev'))
app.use(bodyParser.json());



app.use('/admin', adminRouter)

app.listen(port, console.log("Starting Server in Port " + port));
