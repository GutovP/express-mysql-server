const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_mysql_crud_db',
});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Database is connected successfully');
  }
});

module.exports = connection;
