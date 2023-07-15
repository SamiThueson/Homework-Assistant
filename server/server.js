// Entry Point of the API Server
 
const express = require('express');
const app = express();
const session = require("express-session");
// const env = require("dotenv").config();
const pool = require('./database');

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require('cors');
app.use(cors());

/* ***********************
 * Middleware
 * ************************/
// app.use(session({
//    store: new (require('connect-pg-simple')(session))({
//      createTableIfMissing: true,
//      pool,
//    }),
//    secret: process.env.SESSION_SECRET,
//    resave: true,
//    saveUninitialized: true,
//    name: 'sessionId',
//  }))

app.use('/', require('./routes'));


/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
