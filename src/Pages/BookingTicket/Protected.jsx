import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  let { userInfor } = useSelector((state) => state.reducerQuanLyNguoiDung);

  if (!userInfor) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};
