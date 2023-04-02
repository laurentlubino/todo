import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/auth";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let { user } = useAuth();
  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
