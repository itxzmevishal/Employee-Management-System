import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EditEmployee() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    salary: "",
    date_joined: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employees/${id}`)
      .then((res) => {
        setFormData({
          ...res.data,
          date_joined: res.data.date_joined
            ? res.data.date_joined.split("T")[0]
            : "",
        });
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // remove error on change
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.salary) {
      newErrors.salary = "Salary is required";
    } else if (Number(formData.salary) <= 0) {
      newErrors.salary = "Salary must be greater than 0";
    }

    if (!formData.date_joined) {
      newErrors.date_joined = "Date joined is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return; // stop if validation fails

    try {
      await axios.put(`http://localhost:5000/employees/${id}`, formData);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4" style={{ minHeight: "100vh" }}>
      <div className="card shadow">
        <div className="card-header bg-warning text-dark">
          <h4 className="mb-0">Edit Employee</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                name="designation"
                className="form-control"
                value={formData.designation}
                onChange={handleChange}
              />
              {errors.designation && (
                <div className="text-danger">{errors.designation}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Salary (₹)</label>
              <input
                type="number"
                name="salary"
                className="form-control"
                value={formData.salary}
                onChange={handleChange}
              />
              {errors.salary && (
                <div className="text-danger">{errors.salary}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Date Joined</label>
              <input
                type="date"
                name="date_joined"
                className="form-control"
                value={formData.date_joined}
                onChange={handleChange}
              />
              {errors.date_joined && (
                <div className="text-danger">{errors.date_joined}</div>
              )}
            </div>

            <div className="d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
