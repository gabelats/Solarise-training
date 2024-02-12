import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Module from "./pages/Module.jsx";
import Error from "./pages/Error.jsx";
import Lesson from "./pages/lesson.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
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
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/Module/:day",
        element: <Module />,
      },
      {
        path: "/lesson/:videoId",
        element: <Lesson />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
