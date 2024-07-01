import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import { Toaster } from "../ui/toaster";
import { StreamVideoProvider } from "@/providers/StreamClientProvider";

const Layout = () => {
  const location = useLocation();
  const restrictedPaths = ["/login", "/register"];
  return (
    <StreamVideoProvider>
    <div className="flex flex-col justify-start items-center bg-[#131B23] text-white">
      {restrictedPaths.includes(location.pathname) ? null : <Header />}
      <Outlet />
      <Toaster />
    </div>
    </StreamVideoProvider>
  );
};

export default Layout;
