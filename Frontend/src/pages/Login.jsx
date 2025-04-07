import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect based on user role
      if (user?.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/user/booking", { replace: true });
      }
    }
  }, [isAuthenticated, navigate, user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userData = await login(formData.email, formData.password);
      if (userData) {
        toast.success("Login successful!");
        // Redirection will be handled by the useEffect above
      }
    } catch (error) {
      toast.error(error || "Login failed");
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
                  style={{ width: "40%" }}
                ></div>
                <div className="skeleton skeleton-input"></div>
              </div>

              <div className="skeleton skeleton-button"></div>
            </div>
          </>
        ) : (
          <>
            <div className="auth-header">
              <h1 className="auth-title">Welcome Back</h1>
              <p className="auth-subtitle">Sign in to continue with Rail Dost</p>
            </div>
            
            <form onSubmit={handleSubmit} className="auth-form">
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
                    placeholder="Enter your password"
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
                    Sign In
                  </>
                )}
              </button>
            </form>

            <div className="auth-footer">
              <p>Don't have an account? <Link to="/register" className="auth-link">Create Account</Link></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
