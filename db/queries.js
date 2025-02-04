const pool = require('./pool');

async function createMessage({user, text, added}) {
    const SQL = `
        INSERT INTO messages(user, text, added)
        VALUES($1, $2, $3)
        RETURNING *
    `;
        
    const values = [user,text, added];
    const {rows} = await pool.query(SQL, values);
    return rows[0];
};

async function getMessage() {
    const SQL = `
        SELECT * FROM messages ORBER BY added DESC
    `;
    const {rows} = await pool.query(SQL);
    return rows;
};

module.exports = {
    createMessage,
    getMessage
}