const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "welcome17",
  database: "sakila",
  host: "localhost",
  port: "3306"
});

let taskdb = {};

taskdb.getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM sakila.task", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

taskdb.getOne = (id) => {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM sakila.task WHERE ID =?", id, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      });
    });
  };

  taskdb.delete = (id) => {
    return new Promise((resolve, reject) => {
      pool.query("DELETE FROM sakila.task WHERE ID =?", id, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      });
    });
  };
module.exports = taskdb;
