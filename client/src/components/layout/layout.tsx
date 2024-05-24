import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-slate-100">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
