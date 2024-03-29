import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Shipping from './Components/Shipping/Shipping';
import Shop from './Components/Shop/Shop';
import SignUp from './Components/SignUp/SignUp';
import { productsAndCartLoader } from './Loader/productsAndCartLoader';
import PrivateRoute from './Routes/PrivateRoute';
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
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: "/shipping",
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
        },

        {
          path: "/about",
          element: <About></About>
        },

        {
          path: "/login",
          element: <Login></Login>
        },

        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
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
