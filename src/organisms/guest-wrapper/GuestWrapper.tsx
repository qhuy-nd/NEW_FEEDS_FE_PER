import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";

const GuestWrapper = () => {
  const { isChecking, isAuthenticated } = useAuth();

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default GuestWrapper;
