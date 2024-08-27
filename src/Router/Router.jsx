import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";

import BookService from "../Pages/BookService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/book/:id",
        element: <BookService></BookService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      // {
      //   path: "/checkout/:id",
      //   element: <BookService></BookService>,
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/services/${params.id}`),
      // },
    ],
  },
]);
export default router;
