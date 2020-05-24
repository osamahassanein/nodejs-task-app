**Get Task**
----
  Returns json data about a single task.

* **URL**

  /api/tasks/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"task_id":1,"description":"Build Web app for HRMS","status":"Done","creation_date":"2018-11-12T22:00:00.000Z","requester":"HR Dept","last_update_date":"2019-02-02T22:00:00.000Z"}`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Task doesn't exist" }`

  
* **Sample Call:**

  ```
  taskdb.getOne = (id) => {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM sakila.task WHERE TASK_ID =?", id, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      });
    });
  };
  ```
  
  **Get Tasks**
----
  Returns json array data about all tasks.

* **URL**

  /api/tasks

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"task_id":1,"description":"Build Web app for HRMS","status":"Done","creation_date":"2018-11-12T22:00:00.000Z","requester":"HR Dept","last_update_date":"2019-02-02T22:00:00.000Z"},{"task_id":2,"description":"Add new user to domain","status":"Done","creation_date":"2018-11-12T22:00:00.000Z","requester":"SCM Dept","last_update_date":"2019-02-02T22:00:00.000Z"},{"task_id":3,"description":"E-Mail space is full","status":"Done","creation_date":"2018-11-12T22:00:00.000Z","requester":"FIN Dept","last_update_date":"2019-02-02T22:00:00.000Z"},{"task_id":4,"description":"Employee Medical Card request","status":"Pending","creation_date":"2018-11-12T22:00:00.000Z","requester":"IT Dept","last_update_date":"2019-02-02T22:00:00.000Z"}]`
 
  
* **Sample Call:**

  ```
  taskdb.getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM sakila.task", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });};
  ```
  
    **Get SubTasks**
----
  Returns json array data about all subtasks of specific task.

* **URL**

  /api/tasks/:id/subtasks

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{"subtask_id":1,"task_id":1,"description":"Analyze business","status":"done","creation_date":"2018-11-12T22:00:00.000Z","last_update_date":"2018-11-12T22:00:00.000Z"},{"subtask_id":2,"task_id":1,"description":"Choose DB server","status":"done","creation_date":"2018-11-12T22:00:00.000Z","last_update_date":"2018-11-12T22:00:00.000Z"},{"subtask_id":3,"task_id":1,"description":"Choose back-end technology","status":"done","creation_date":"2018-12-12T22:00:00.000Z","last_update_date":"2018-12-22T22:00:00.000Z"},{"subtask_id":4,"task_id":1,"description":"Choose front-end technology","status":"done","creation_date":"2018-12-12T22:00:00.000Z","last_update_date":"2018-12-22T22:00:00.000Z"},{"subtask_id":5,"task_id":1,"description":"Build App","status":"not done","creation_date":"2018-11-12T22:00:00.000Z","last_update_date":"2018-11-12T22:00:00.000Z"},{"subtask_id":6,"task_id":1,"description":"Test App","status":"not done","creation_date":"2018-11-12T22:00:00.000Z","last_update_date":"2019-01-22T22:00:00.000Z"}]`
 
  
* **Sample Call:**

  ```
  taskdb.getSubTasks = (id) => {
    return new Promise((resolve, reject) => {
      pool.query("SELECT * FROM sakila.subtask WHERE TASK_ID =?", id, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  };
  ```
