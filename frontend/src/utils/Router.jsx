import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
