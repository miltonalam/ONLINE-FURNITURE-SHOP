import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./component/Header/Header";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Order from './pages/Order';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("--food-cart");
    if (stored) {
      const parsed = stored.split(",").filter(id => id); // ✅ filters out empty strings
      setCart(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("--food-cart", cart.join(","));
  }, [cart]);

  const router = createBrowserRouter([
    { path: "/", Component: () => <Home cart={cart} setCart={setCart} /> },
    { path: "/menu", Component: () => <Menu searchTerm={searchTerm} cart={cart} setCart={setCart} /> },
    { path: "/cart", Component: () => <Cart cart={cart} setCart={setCart} /> },
    { path: "/about", Component: About },
    { path: "/contact", Component: Contact },
    { path: "/login", Component: Login },
    { path: "/signup", Component: Signup },
    { path: "/order", Component: Order }
  ]);

  return (
    <>
      <Header cart={cart} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
