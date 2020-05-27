const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "welcome17",
  database: "sakila",
  host: "localhost",
  port: "3306",
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
    pool.query(
      "SELECT * FROM sakila.task WHERE TASK_ID =?",
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

taskdb.getSubTasks = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT * FROM sakila.subtask WHERE TASK_ID =?",
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

taskdb.delete = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "DELETE FROM sakila.task WHERE TASK_ID =?",
      id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

taskdb.createTask = (taskObj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO sakila.task 
            (
              description, status, creation_date, requester
            )
            VALUES
            (
                ?, ?, STR_TO_DATE(?,'%Y-%m-%d %h:%i:%s'), ?
            )`;

    pool.query(
      sql,
      [
        taskObj.description,
        taskObj.status,
        taskObj.creation_date,
        taskObj.requester,
      ],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);        
      }
    );
  });
};

module.exports = taskdb;
