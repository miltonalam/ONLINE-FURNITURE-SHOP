import { foodCard } from "../component/data";
import Footer from "../component/Footer/Footer";

const Menu = ({ searchTerm, cart, setCart }) => {
  const showFurniture = foodCard.filter(ele => ele.type === "furniture");
  const showDesserts = foodCard.filter(ele => ele.type === "dessert");

  const handleAdd = id => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  const filteredFurniture = showFurniture.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDesserts = showDesserts.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section className="specials">
        <h2>Furniture Corner</h2>
        <div className="card-container">
          {filteredFurniture.map(item => (
            <div key={item.id} className="dish-card">
              <img src={item.url} alt={item.title} />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>
                <button
                  className="btn btn-yellow-black"
                  onClick={() => handleAdd(item.id)}
                >
                  {cart.includes(item.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2>Luxury Corner</h2>
        <div className="dessert-row">
          {filteredDesserts.map(item => (
            <div key={item.id} className="dessert-card">
              <img src={item.url} alt={item.title} />
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => handleAdd(item.id)}>
                {cart.includes(item.id) ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;