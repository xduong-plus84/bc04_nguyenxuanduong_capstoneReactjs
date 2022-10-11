import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  let { isLoggedIn } = useSelector((state) => state.reducerQuanLyNguoiDung);
  console.log("isLoggedIn: ", isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};
