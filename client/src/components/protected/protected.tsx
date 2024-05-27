import useAuthStore from "@/store/authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any }) => {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
