import { useEffect, useState } from "react";
import { foodCard } from "../component/data";
import Footer from "../component/Footer/Footer";

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (const item of foodCard) {
      if (cart.includes(item.id)) sum += item.price;
    }
    setTotal(sum);
  }, [cart]);

  const handleDelete = id => {
    setCart(cart.filter(i => i !== id));
  };

  return (
    <>
      <section>
        <div className="main-card">
          <h2>Your Cart</h2>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              foodCard
                .filter(item => cart.includes(item.id))
                .map(item => (
                  <div key={item.id} className="cart-card">
                    <img src={item.url} alt={item.title} />
                    <div className="cart-details">
                      <h3>{item.title}</h3>
                      <span>₹{item.price}</span>
                    </div>
                    <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                ))
            )}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
          </div>
          <a href="/order" className="btn">Proceed to Order</a>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cart;