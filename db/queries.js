const pool = require('./pool');

async function showAllMessages(){
    const data = await pool.query('SELECT * FROM messages ORDER BY added ASC');
    return data.rows;
};

async function insertMessage(username, text){
  return await pool.query('INSERT INTO messages(username,text) VALUES($1,$2)', [username,text]);
};

async function getMessageById(id){
    const data =  await pool.query('SELECT * FROM messages WHERE id=$1', [id]);
    return data.rows[0];
};

async function deleteMessage(id){
    const data = await pool.query('DELETE FROM messages WHERE id=$1', [id]);
    return data.rowCount;
};

async function getMessageByUser(username){
  const data = await pool.query('SELECT * FROM messages WHERE username=$1 ORDER BY added ASC', [username]);
  return data.rows;
};

module.exports = {
    showAllMessages,
    getMessageById,
    getMessageByUser,
    insertMessage,
    deleteMessage
}