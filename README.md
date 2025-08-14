# Employee Management System

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Made with React](https://img.shields.io/badge/Made%20with-React-blue.svg)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green.svg)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue.svg)
![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-purple.svg)

---

## Description

The **Employee Management System** is a full-stack web application designed to simplify employee data management. Built using **React** for the frontend, **Node.js** for the backend, **Bootstrap** for responsive UI, and **MySQL** as the database, this system allows users to **add, view, update, and delete employee information efficiently**.

It is ideal for small to medium businesses looking for a simple, user-friendly, and robust solution to manage employee records.

---

## Features

- **CRUD Operations:** Create, Read, Update, and Delete employee records.
- **Responsive Design:** Clean, mobile-friendly interface using Bootstrap.
- **Search Functionality:** Filter employees by Name, ID, or Designation.
- **Real-Time Data Updates:** Changes reflected instantly.
- **Secure Backend:** Node.js server with MySQL database.
- **Error Handling & Validation:** Validates user inputs and handles server errors gracefully.

---

## Screenshots

**Dashboard Example:**  
![Dashboard Screenshot](https://github.com/itxzmevishal/Employee-Management-System/blob/d9a3cae6805e7dbb1a8edb1157a1d24cce8d336b/screenshots/Frontend-d.png)

**Add Employee Form:**  
![Add Employee Screenshot](https://github.com/itxzmevishal/Employee-Management-System/blob/d30e51feffa64f5a06c54b0c21f1bc69a2495268/screenshots/Add-e.png)

**Edit Employee Form:**  
![Edit Employee Screenshot](https://github.com/itxzmevishal/Employee-Management-System/blob/305fffb31945235be5d78cc9849d10fea545fc0c/screenshots/Edit-e.png)

---

## Installation

### Prerequisites

- Node.js (v18+)
- MySQL Server
- Git (for cloning repository)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/itxzmevishal/Employee-Management-System.git
   cd employee-management-system
   ```

## Installation

Install backend dependencies:
cd backend
npm install

Setup MySQL Database:
Create a database named employee_management.
Import the SQL schema from database.sql (provided in the repo).

Configure environment variables:
Create a .env file in the backend folder:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=employee_management
PORT=5000

Start the backend server:
npm start
Or, with nodemon:
nodemon server.js

Install frontend dependencies and start React app:
cd ../frontend
npm install
npm start

Open your browser at http://localhost:3000 to access the application.

## Usage

Navigate to the dashboard to view all employees.
Use Add Employee form to insert new records.
Click Edit on any employee row to update details.
Use Delete to remove employees.
Use the search bar to filter employees by Name, ID, or Designation.

## Contributing

Contributions are welcome! To contribute:
Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -m 'Add feature').
Push to the branch (git push origin feature-name).
Open a Pull Request describing your changes.

## License

This project is licensed under the MIT License. See LICENSE for details.

## Contact

GitHub: https://github.com/itxzmevishal 

Email: sanapvishal128@gmail.com 

LinkedIn: https://www.linkedin.com/in/vishal-sanap-/

---
