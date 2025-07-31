import Footer from "../component/Footer/Footer";

const Order = () => {
  return (
    <>
      <section className="order-form-section">
        <h2>Place Your Order</h2>
        <form className="order-form">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="tel" name="phone" placeholder="10-digit Phone Number" required />
          <textarea name="address" placeholder="Delivery Address" required></textarea>
          <button type="submit" className="btn">Place Order</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Order;
