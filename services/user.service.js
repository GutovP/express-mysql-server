const session = require('express-session');
const connection = require('../config/db.config');

function getAll(req, res) {
  const sqlQuery = 'SELECT * FROM users';

  connection.query(sqlQuery, (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  });
  return req;
}
function register(req, res) {
  const { username, email, password } = req.body;

  const sqlQuery = `INSERT INTO users (username, email, password) 
                    VALUES ('${username}','${email}','${password}')`;

  connection.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
}
function login(req, res) {
  const { email, password } = req.body;
  const sqlQuery = `SELECT * FROM users 
                    WHERE email ='${email}' AND password = '${password}'`;

  connection.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
  if (email && password) {
    const user = sqlQuery.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      req.session.id = user.id;
      req.session.username = user.username;
    }
  }
}
function logout(req, res) {
  const sqlQuery = `SELECT * FROM users WHERE email = ''`;

  connection.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
}
function getProfileInfo(req, res) {
  const id = req.params.id;
  const sqlQuery = `SELECT * FROM users WHERE id = '${id}'`;

  connection.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
}
function editProfileInfo(req, res) {
  const id = req.id;
  const { username, email, password } = req.body;

  const sqlQuery = `UPDATE users SET username = '${username}', email = '${email}', password = '${password}' WHERE id = '${id}'`;

  // (" UPDATE `node_mysql_crud_db`.`users` SET `username` = 'Panta', `password` = 'pederugi' WHERE (`id` = '36')");
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
}

module.exports = {
  getAll,
  register,
  login,
  logout,
  editProfileInfo,
  getProfileInfo,
};
