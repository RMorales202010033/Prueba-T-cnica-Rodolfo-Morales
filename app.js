const express = require('express') 
const cors = require('cors') 

const MyApp = express(); 

MyApp.use(express.json()) 

const bodyParser = require('body-parser'); 
MyApp.use(bodyParser.json({ limit: '15mb' }));

MyApp.use(cors()) 

const rutas= require('./routes/router.js')

MyApp.use(rutas)

module.exports = MyApp;
