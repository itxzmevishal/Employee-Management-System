import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard({ darkMode, toggleDarkMode }) {
  const [employees, setEmployees] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 40;

  // Sorting state
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employees");
      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDelete = (id) => {
    setEmployeeToDelete(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/employees/${employeeToDelete}`);
      setShowModal(false);
      setEmployeeToDelete(null);
      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  };

  const formatDate = (d) => {
    if (!d) return "N/A";
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    return String(d).split("T")[0];
  };

  // Sorting function
  const sortedEmployees = React.useMemo(() => {
    let sortableEmployees = [...employees];

    // Apply search filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      sortableEmployees = sortableEmployees.filter(
        (emp) =>
          String(emp.id).includes(query) ||
          emp.name.toLowerCase().includes(query) ||
          emp.designation.toLowerCase().includes(query)
      );
    }

    if (sortConfig.key && sortConfig.key !== "date_joined") {
      sortableEmployees.sort((a, b) => {
        let valA = a[sortConfig.key];
        let valB = b[sortConfig.key];

        if (typeof valA === "string") valA = valA.toLowerCase();
        if (typeof valB === "string") valB = valB.toLowerCase();

        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }
    return sortableEmployees;
  }, [employees, sortConfig, searchQuery]);

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );
  const totalPages = Math.ceil(sortedEmployees.length / employeesPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const requestSort = (key) => {
    if (key === "date_joined") return; // Date Joined untouched
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const getSortArrow = (key) => {
    if (key === "date_joined") return ""; // Date Joined untouched
    return sortConfig.key === key
      ? sortConfig.direction === "asc"
        ? " ▲"
        : " ▼"
      : " ▲"; // default arrow visible (ascending)
  };

  return (
    <div
      className="min-vh-100"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #0f0f0f, #1b1b1b)"
          : "linear-gradient(135deg, #eef4ff, #dfe9ff)",
        color: darkMode ? "#f8f9fa" : "#212529",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
          <div>
            <h2 className="fw-bold mb-1" style={{ letterSpacing: ".3px" }}>
              <span style={{ color: darkMode ? "#f1c40f" : "#2c3e50" }}>
                Employee Management System
              </span>
            </h2>
            <p className="mb-0" style={{ opacity: 0.8 }}>
              Manage employees, update records, and keep everything in sync.
            </p>
          </div>

          <div className="d-flex gap-2 mt-3 mt-md-0">
            <button
              className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
              onClick={toggleDarkMode}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
            <Link to="/add" className="btn btn-sm btn-success">
              + Add Employee
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ID, Name, or Designation..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // reset to first page after search
            }}
          />
        </div>

        {/* Table Card */}
        <div
          className={`card border-0 shadow ${
            darkMode ? "bg-secondary text-light" : "bg-white"
          }`}
          style={{ borderRadius: "16px" }}
        >
          <div className="card-body p-0">
            <div className="table-responsive">
              <table
                className={`table table-hover align-middle mb-0 ${
                  darkMode ? "table-dark" : "table-striped"
                }`}
                style={{ borderRadius: "3px", overflow: "hidden" }}
              >
                <thead className={darkMode ? "table-warning" : "table-dark"}>
                  <tr>
                    <th
                      style={{ whiteSpace: "nowrap", cursor: "pointer" }}
                      onClick={() => requestSort("id")}
                    >
                      ID{getSortArrow("id")}
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => requestSort("name")}
                    >
                      Name{getSortArrow("name")}
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => requestSort("email")}
                    >
                      Email{getSortArrow("email")}
                    </th>
                    <th
                      style={{ cursor: "pointer" }}
                      onClick={() => requestSort("designation")}
                    >
                      Designation{getSortArrow("designation")}
                    </th>
                    <th
                      style={{ whiteSpace: "nowrap", cursor: "pointer" }}
                      onClick={() => requestSort("salary")}
                    >
                      Salary (₹){getSortArrow("salary")}
                    </th>
                    <th style={{ whiteSpace: "nowrap" }}>Date Joined</th>
                    <th style={{ width: 160 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentEmployees.length > 0 ? (
                    currentEmployees.map((emp) => (
                      <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.designation}</td>
                        <td>{emp.salary}</td>
                        <td>{formatDate(emp.date_joined)}</td>
                        <td>
                          <div className="d-flex gap-4">
                            <Link
                              to={`/edit/${emp.id}`}
                              className="btn btn-warning btn-sm"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => confirmDelete(emp.id)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4">
                        No employees found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav aria-label="Employee table pagination" className="mt-3">
            <ul className="pagination justify-content-center mb-0">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => goToPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button className="page-link" onClick={() => goToPage(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => goToPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div
              className={`modal-content ${
                darkMode ? "bg-dark text-light" : ""
              }`}
            >
              <div className="modal-header border-0">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this employee? This action
                cannot be undone.
              </div>
              <div className="modal-footer border-0">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
