const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "welcome17",
  database: "phonesapp",
  host: "localhost",
  port: "3306"
});

let taskdb = {};

taskdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM PHONESAPP.OPERATOR", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = taskdb;
