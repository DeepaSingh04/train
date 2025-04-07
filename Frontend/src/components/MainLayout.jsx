import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./MainLayout.css";

const MainLayout = () => {
  const { user, isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="layout-loading">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user is trying to access admin routes
  const isAdminRoute = location.pathname.startsWith("/admin");
  if (isAdminRoute && user?.role !== "admin") {
    return <Navigate to="/user/booking" replace />;
  }

  // Check if user is trying to access user routes
  const isUserRoute = location.pathname.startsWith("/user");
  if (isUserRoute && user?.role !== "user") {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 