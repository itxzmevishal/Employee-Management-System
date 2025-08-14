require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./models/db"); // Database connection

const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Employee Management Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
