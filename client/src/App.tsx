import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conference from "./pages/conference";
import Layout from "./components/layout/layout";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/protected/protected";

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
  return <RouterProvider router={router} />;
}
