import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Toaster } from 'react-hot-toast';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Roots from './Components/Roots/Roots';
import BookDetails from './Components/BookDetails/BookDetails';
import WishlistBooks from './Components/WhishList/WishlistBooks';
import ListedBook from './Components/ListedBook/ListedBook';

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
        // index : true ,
        path : "/listed-book",
        element : <ListedBooks></ListedBooks>,
        loader : () => fetch('data.json'),
        children : [
         {
          index : true,
          element : <ListedBook></ListedBook>
         },
         {
          path:"wishList",
          element:<WishlistBooks></WishlistBooks>,
          loader : () => fetch('data.json')
         }
        ]
      },
    
      {
        path : "/pages-to-read",
        element : <PagesToRead></PagesToRead>,
        loader : () => fetch('data.json')
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
 
    <Toaster></Toaster>
  </StrictMode>,
)
