import { foodCard } from "../component/data";
import Footer from "../component/Footer/Footer";
import HeroCarousel from "./HeroCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';

const Home = ({ cart, setCart }) => {
  const featured = foodCard.filter(item => item.type === "furniture" || item.type === "home");

  const addToCart = id => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  return (
    <>
      <main>
        <section className="container-fluid px-0"><HeroCarousel /></section>
        <section className="specials py-4">
          <h2 className="text-center">Featured Products</h2>
          <div className="card-container d-flex justify-content-center gap-4 flex-wrap mt-3">
            {featured.map(item => (
              <div className="dish-card text-center shadow p-3" key={item.id}>
                <img src={item.url} alt={item.title} className="img-fluid" />
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>₹{item.price}</p>
                  <button
                    className="btn btn-yellow-black"
                    onClick={() => addToCart(item.id)}
                  >
                    {cart.includes(item.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;