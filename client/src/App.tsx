import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conference from "./pages/conference";
import Layout from "./components/layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protected/protected";
import useAuthStore from "./store/authStore";
import { useEffect } from "react";

// https://coolors.co/2274a5-e7dfc6-e9f1f7-131b23
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "conference", element: <Conference /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default function App() {
  const fetchProfile = useAuthStore((state) => state.fetchProfile);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile, token]);

  return <RouterProvider router={router} />;
}
