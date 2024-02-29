import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app.jsx";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/home.jsx";
import Module from "./pages/module.jsx";
import Error from "./pages/Error.jsx";
import Lesson from "./pages/lesson.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import Login from "./pages/newLogin.jsx";

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
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/Module/:day",
        element: <Module />,
      },
      {
        path: "/lesson/:day",
        element: <Lesson />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
