import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/Banner/Banner.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import React from "react";
import CustomShapeBarChart from "./components/pagesChart/pagesChart.jsx";
import NotFound from "./components/notFound/notFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Banner />,
        loader: () => fetch("../public/books.json"),
      },
      {
        path: "/:id",
        element: <BookDetails />,
        loader: () => fetch("../public/books.json"),
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        loader: () => fetch("../public/books.json"),
      },
      {
        path: "/chart",
        element: <CustomShapeBarChart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
