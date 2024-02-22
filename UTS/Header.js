import Carousel from 'react-bootstrap/Carousel';
import gbr1 from "./img/gbr1.jpg";
import gbr2 from "./img/gbr2.jpg";
import gbr3 from "./img/gbr3.jpg";
 
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gbr1}
          alt="First slide"
          height={750}
        />
        <Carousel.Caption>
          <h3>Field Day Flowers</h3>
          <p>JL. Tilam Upih Kota Madiun</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gbr2}
          alt="Second slide"
          height={750}
        />

        <Carousel.Caption>
          <h3>Studio flowers</h3>
          <p>customer favorite place</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gbr3}
          alt="Third slide"
          height={750}
        />

        <Carousel.Caption>
          <h3>Fresh flowers</h3>
          <p>
            Make Flowers Bouquet 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;