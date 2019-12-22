
const { Pool, Client } = require('pg')
const enviroment = process.env.NODE_ENV || 'development';
const config = require('./config')[enviroment];
const pool = new Pool(config)
module.exports = pool;
