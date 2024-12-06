import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  console.log(isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) return children;
};

export default ProtectedRoute;
