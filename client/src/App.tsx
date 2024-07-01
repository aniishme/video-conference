import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conference from "./pages/conference";
import Layout from "./components/layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protected/protected";
import useAuthStore from "./store/authStore";
import { useEffect } from "react";
import Meeting from "./pages/meeting";


// https://coolors.co/2274a5-e7dfc6-e9f1f7-131b23
const router = createBrowserRouter([{
  path: "login",
  element: <Login />,
},
{
  path: "register",
  element: <Register />,
},
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"events/:eventId", element:<Meeting/>
      },
      { path: "conference", element: <Conference /> },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
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
