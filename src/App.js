import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import { productsAndCartLoader } from './Loader/productsAndCartLoader';
import Main from './layouts/Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },

        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },

        {
          path: "/inventory",
          element: <Inventory></Inventory>
        },

        {
          path: "/about",
          element: <About></About>
        }
      ]
    },

  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
