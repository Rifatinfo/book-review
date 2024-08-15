import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Roots from './Components/Roots/Roots';
import BookDetails from './Components/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('data.json')
      },
      {
        path : "/listed-book",
        element : <ListedBooks></ListedBooks>,
        loader : () => fetch('data.json')
      },
      {
        path : "/pages-to-read",
        element : <PagesToRead></PagesToRead>
      },
      {
        path : "/:bookId",
        element : <BookDetails></BookDetails>,
        loader : () => fetch('data.json')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
