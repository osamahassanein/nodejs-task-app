const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("REQ is >>>" + req.path);
    let results = await db.getAll();
    console.log("RES is >>>" + JSON.stringify(results));
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let results = await db.getOne(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id/subtasks", async (req, res, next) => {
  try {
    let results = await db.getSubTasks(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let results = await db.delete(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.updateTask("/:id", async (req, res, next) => {
  try {
    let results = await db.updateTask(req.body);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/create-task", async (req, res, next) => {
  try {
    console.log("REQ is >>>" + req.path);
    console.log("REQ is >>>" + JSON.stringify(req.body.status));
    console.log("REQ is >>>" + JSON.stringify(req.body));
    let task = await db.createTask(req.body);
    res.json(task);
  } catch (e) {
    console.log(e);
    // res.sendStatus(500);
  }
});

router.post("/create-subtask", async (req, res, next) => {
  try {
    console.log("REQ is >>>" + req.path);
    console.log("REQ is >>>" + JSON.stringify(req.body.status));
    console.log("REQ is >>>" + JSON.stringify(req.body));
    let subtask = await db.createSubtask(req.body);
    res.json(subtask);
  } catch (e) {
    console.log(e);
    // res.sendStatus(500);
  }
});
module.exports = router;
