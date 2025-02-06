const pool = require('./pool');

async function createMessage({username, text, added}) {
    const SQL = `
        INSERT INTO messages(username, text, added)
        VALUES($1, $2, $3)
        RETURNING *
    `;
        
    const values = [username,text, added];
    const {rows} = await pool.query(SQL, values);
    return rows[0];
};

async function getMessage() {
    const SQL = `
        SELECT * FROM messages
    `;
    const {rows} = await pool.query(SQL);
    return rows;
};

module.exports = {
    createMessage,
    getMessage
}