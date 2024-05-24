import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-start items-center">
      {location.pathname === "/login" ? null : <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
