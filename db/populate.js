require('dotenv').config()

const {Pool} = require('pg');

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user VARCHAR (255),
    text VARCHAR (255),
    added INTEGER (50)
    );

`;

async function main(params) {
    console.log("SEEEDING...")
    const pool = new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT, // default Postgres port
        database: process.env.DB_NAME,
    });
    await pool.connect();
    await pool.query(SQL);
    console.log("done")
};