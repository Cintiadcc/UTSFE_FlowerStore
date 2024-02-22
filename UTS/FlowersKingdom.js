import Carousel from 'react-bootstrap/Carousel';
import kf1 from "./img/kf1.jpg";
//import kf1 from "./kf1.jpg";;


function FlowersKingdom() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kf1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Flowers Kingdom</h5>
          <p>I will make you happiness as buy flowers</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}
export default FlowersKingdom