import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets/pic1.jpeg.jpg';
import pic4 from '../assets/pic4.jpeg.jpg';
import pic11 from '../assets/pic11.jpeg.jpg';

function HeroCarousel() {
  return (
    <Carousel fade interval={4000}>
      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={pic1}
          alt="First slide"
        />
        <Carousel.Caption className="text-start">
          <h3>Modern Furniture for Every Home</h3>
          <p>Discover comfort, style, and affordability</p>
          <button className="btn btn-yellow-black">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={pic4}
          alt="Second slide"
        />
        <Carousel.Caption className="text-start">
          <h3>Elevate Your Living Space</h3>
          <p>Handpicked styles that fit your life</p>
          <button className="btn btn-yellow-black">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 hero-image"
          src={pic11}
          alt="Third slide"
        />
        <Carousel.Caption className="text-start">
          <h3>Quality Meets Affordability</h3>
          <p>Furniture built to last</p>
          <button className="btn btn-yellow-black">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroCarousel;