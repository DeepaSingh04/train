import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "./Login.css"; // Using the same CSS as Login

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const { register } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const success = await register(
        formData.name,
        formData.email,
        formData.password
      );

      if (success) {
        toast.success("Registration successful! Please login to continue.");
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (error) {
      toast.error(error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {pageLoading ? (
          <>
            <div className="skeleton skeleton-title"></div>
            <div className="auth-form">
              <div className="form-group">
                <div
                  className="skeleton skeleton-text"
                  style={{ width: "30%" }}
                ></div>
                <div className="skeleton skeleton-input"></div>
              </div>

              <div className="form-group">
                <div
                  className="skeleton skeleton-text"
                  style={{ width: "30%" }}
                ></div>
                <div className="skeleton skeleton-input"></div>
              </div>

              <div className="form-group">
                <div
                  className="skeleton skeleton-text"
                  style={{ width: "40%" }}
                ></div>
                <div className="skeleton skeleton-input"></div>
              </div>

              <div className="form-group">
                <div
                  className="skeleton skeleton-text"
                  style={{ width: "60%" }}
                ></div>
                <div className="skeleton skeleton-input"></div>
              </div>

              <div className="skeleton skeleton-button"></div>
            </div>
          </>
        ) : (
          <>
            <div className="auth-header">
              <h1 className="auth-title">Create Account</h1>
              <p className="auth-subtitle">Join Rail Dost for seamless train booking</p>
            </div>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <div className="input-group">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-icon">✉️</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        email: e.target.value.toLowerCase(),
                      });
                    }}
                    className="form-control"
                    placeholder="Enter your email address"
                    required
                    style={{ textTransform: "lowercase" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Create a password (min. 6 characters)"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                  <span className="input-icon">🔒</span>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="auth-button" 
                disabled={loading}
              >
                {loading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <span className="button-icon">🚂</span>
                    Create Account
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>Already have an account? <Link to="/login" className="auth-link">Sign In</Link></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Register;
