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
import TagSupport from "./pages/Catalog/tag/TagSupport.jsx";
import NewYear from "./pages/Catalog/tag/NewYear.jsx";
import Ai from "./pages/Catalog/tag/Ai.jsx";
import AppDev from "./pages/Catalog/tag/AppDev.jsx";
import DataBase from "./pages/Catalog/tag/DataBase.jsx";
import Automation from "./pages/Catalog/tag/Automation.jsx";
import NoCode from "./pages/Catalog/tag/NoCode.jsx";
import Popularity from "./pages/Catalog/sort/Popularity.jsx";
import FreeCourse from "./pages/Catalog/sort/FreeCourse.jsx";
import SortSupport from "./pages/Catalog/sort/SortSupport.jsx";
import Search from "./pages/Catalog/search/Search.jsx";
import Python from "./pages/Catalog/search/Python.jsx";
import Sql from "./pages/Catalog/search/Sql.jsx";
import ChatGpt from "./pages/Catalog/search/ChatGpt.jsx";
import Data from "./pages/Catalog/search/Data.jsx";

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
      { path: "/catalog/tagsupport", element: <TagSupport /> },
      { path: "/catalog/newyear", element: <NewYear /> },
      { path: "/catalog/ai", element: <Ai /> },
      { path: "/catalog/appdev", element: <AppDev /> },
      { path: "/catalog/database", element: <DataBase /> },
      { path: "/catalog/automation", element: <Automation /> },
      { path: "/catalog/nocode", element: <NoCode /> },
      { path: "/catalog/latest", element: <Catalog /> },
      { path: "/catalog/popularity", element: <Popularity /> },
      { path: "/catalog/freecourse", element: <FreeCourse /> },
      { path: "/catalog/sortsupport", element: <SortSupport /> },
      { path: "/catalog/search", element: <Search /> },
      { path: "/catalog/search/python", element: <Python /> },
      { path: "/catalog/search/sql", element: <Sql /> },
      { path: "/catalog/search/chatgpt", element: <ChatGpt /> },
      { path: "/catalog/search/data", element: <Data /> },
      { path: "/classroom", element: <Classroom /> },
      { path: "/enrolleds", element: <Enrolleds /> },
      { path: "/details", element: <Details /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
