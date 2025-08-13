const express = require("express");
const router = express.Router();
const db = require("../models/db");

// GET all employees
router.get("/", (req, res) => {
  const sql = "SELECT id, name, email, designation, salary, DATE_FORMAT(date_joined, '%Y-%m-%d') AS date_joined FROM employees";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// GET single employee by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT id, name, email, designation, salary, DATE_FORMAT(date_joined, '%Y-%m-%d') AS date_joined FROM employees WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: "Employee not found" });
    res.json(results[0]);
  });
});

// UPDATE employee
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, designation, salary, date_joined } = req.body;

  if (!name || !email || !designation || !salary || !date_joined) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "UPDATE employees SET name=?, email=?, designation=?, salary=?, date_joined=? WHERE id=?";
  db.query(sql, [name, email, designation, salary, date_joined, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee updated successfully" });
  });
});

// DELETE employee
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM employees WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  });
});

// POST new employee
router.post("/", (req, res) => {
  const { name, email, designation, salary, date_joined } = req.body;

  if (!name || !email || !designation || !salary || !date_joined) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO employees (name, email, designation, salary, date_joined) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, email, designation, salary, date_joined], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
});

module.exports = router;
