import Carousel from 'react-bootstrap/Carousel';
import img_1 from '../../images/1.jpg'
import img_2 from '../../images/2.jpg'
import img_3 from '../../images/1.jpg'
import './slider.css'
function Slider() {
  return (
    <div className="slider_section">
        <h2>Testmonials</h2>
        <div className="container">
        <Carousel>
      <Carousel.Item>
        <img src={img_3} alt=''
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img_2} alt=''
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={img_1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          src={img_2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    </div>
  );
}

export default Slider;