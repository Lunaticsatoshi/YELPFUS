const { Pool } = require('pg');
const { postgresConfig } = require('../config/db');

const pool = new Pool(postgresConfig);

module.exports = {
    query: (text, params) => pool.query(text, params)
}