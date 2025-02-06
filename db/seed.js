const pool = require('./pool');
const {createMessage} = require ("./messageQueries");
const sampleMessages = require('../data');

// SQL statement to create the "messages" table if it doesn't exist
const createTableSQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    text VARCHAR(255),
    added BIGINT
  );
  `;

  async function seedDatabase() {
    try {
        console.log("Creating table...")
        await pool.connect();
        await pool.query(createTableSQL)
        console.log("Table created")

        for (const message of sampleMessages) {
            const newMessage = await createMessage(message);
            console.log('Inserted message:', newMessage);
        }

        console.log('Database seeding complete.');

    } catch (error) {
        console.error("Error seeding database:",error)
    } finally {
        // Close the database pool when done
        await pool.end();
        console.log('Database connection closed.');
    }
  }
  seedDatabase();