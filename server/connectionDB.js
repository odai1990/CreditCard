const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE Credit (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    cardName TEXT,
    CardNumber INT(19),
    cardBalance  DECIMAL DEFAULT 0)`);
});

// db.close();
module.exports = db;