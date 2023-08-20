import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import MainNav from './components/MainNav';
import RootLayout from './pages/Roots';
import Error from './pages/Error';
import ProductDetail from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, errorElement:<Error /> ,children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:id', element: <ProductDetail /> },
    ]
  }
]
)

function App() {
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;
