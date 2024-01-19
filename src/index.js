import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Login from "./pages/Login/Login.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Classroom from "./pages/Classroom/Classroom.jsx";
import Enrolleds from "./pages/Enrolleds/Enrolleds.jsx";
import Details from "./pages/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/catalog", element: <Catalog /> },
      { path: "/classroom", element: <Classroom /> },
      { path: "/enrolleds", element: <Enrolleds /> },
      { path: "/details", element: <Details /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
