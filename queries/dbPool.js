const dbConfig = require("../dbConfig");

const Pool = require("pg").Pool;
const pool = new Pool(dbConfig);

module.exports = pool;
