import ReactDOM from "react-dom/client";

import App from "./app.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Module from "./pages/Module.jsx";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/Module",
        element: <Module />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
