import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Order_review from './component/Order_review/Order_review';
import Main from './layout/Main';
import Shop from './component/Shop/Shop';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import { productsAndCartLoader } from './loders/productAndCartLoader';
import LogIn from './component/LogIn/LogIn';
import SignUp from './component/SignUp/SignUp';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ()=>{
            return fetch('products.json')

          },
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path:'order_review',
          element: <Order_review></Order_review>
        },
        {
          path: '/logIn',
          element: <LogIn></LogIn>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },

      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
