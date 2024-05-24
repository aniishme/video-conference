import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conference from "./pages/conference";
import Layout from "./components/layout/layout";
import Login from "./pages/login";

// https://coolors.co/2274a5-e7dfc6-e9f1f7-131b23
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "conference", element: <Conference /> },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
