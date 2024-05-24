import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Conference from "./pages/conference";
import Layout from "./components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "conference", element: <Conference /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
