import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import { Toaster } from "../ui/toaster";

const Layout = () => {
  const location = useLocation();
  const restrictedPaths = ["/login", "/register"];
  return (
    <div className="flex flex-col justify-start items-center bg-[#131B23] text-white">
      {restrictedPaths.includes(location.pathname) ? null : <Header />}
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
