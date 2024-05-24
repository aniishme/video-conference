import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  const location = useLocation();
  const restrictedPaths = ["/login", "/register"];
  return (
    <div className="flex flex-col justify-start items-center bg-[#131B23] text-white">
      {restrictedPaths.includes(location.pathname) ? null : <Header />}
      <Outlet />
    </div>
  );
};

export default Layout;
