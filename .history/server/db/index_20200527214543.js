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
        return resolve(results);
      }
    );
  });
};

taskdb.updateTask = (task) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE sakila.task SET DESCRIPTION = " +
        task.description +
        " AND REQUESTER = " +
        task.requester +
        " AND STATUS = " +
        task.status +
        " AND LAST_UPDATE_DATE = " +
        task.last_update_date +
        " WHERE TASK_ID =?",
      task.task_id,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
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

taskdb.createSubtask = (subtaskObj) => {
  return new Promise((resolve, reject) => {
    var sql = `INSERT INTO sakila.subtask 
            (
              task_id, description, status, creation_date
            )
            VALUES
            (
                ?, ?, ?, STR_TO_DATE(?,'%Y-%m-%d %h:%i:%s')
            )`;

    pool.query(
      sql,
      [
        subtaskObj.task_id,
        subtaskObj.description,
        subtaskObj.status,
        subtaskObj.creation_date,
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
