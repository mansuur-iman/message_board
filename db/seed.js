require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages(username,text) VALUES 
('Abdi', 'Hello'), 
('Daniel', 'whatsup'), 
('Aisha','lets goo!');
`;

async function seed() {
    console.log('Connecting to DB...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });

    await client.connect();
    console.log('Running SQL...');
    await client.query(SQL);
    await client.end();
    console.log('Seeding finished!');
}

seed().catch(err => console.error(err));
