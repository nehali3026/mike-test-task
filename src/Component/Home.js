import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Logo from "../images/SliderImg.png";
import leftArrow from "../images/leftArrow.svg";
import rigthArrow from "../images/rigthArrow.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import "./style.css";

const Home = () => {
  const [totalSlide, setTotalSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const sliderRef = useRef();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.2,
    },
  };
  useEffect(() => {
    setTotalSlide(sliderRef.current.props.children.length);
  }, []);
  const previous = () => {
    sliderRef.current.previous();
    let slide = currentSlide - 1;
    if (slide == 0) {
      setCurrentSlide(totalSlide);
    } else if (slide == totalSlide) {
      setCurrentSlide(1);
    } else setCurrentSlide(slide);
  };
  const next = () => {
    sliderRef.current.next();
    let slide = currentSlide + 1;
    if (totalSlide < slide) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(slide);
    }
  };
  return (
    <div className="carousel-section">
      <Row className="g-0">
        <Col lg="4">
          <div className="carousel-lestside">
            <h2>Kick Start Your Product With Us</h2>
            <p className="">
              We will help a client's problems to develop the products they have
              with high quality
            </p>
            <div className="caunter">
              <p>
                <span>0{currentSlide}</span>/ 0{totalSlide}
              </p>
            </div>
            <div className="remot-btn">
              <button className={"btnLeft"} onClick={previous}>
                <img src={leftArrow} />
              </button>
              <button className={"btnRigth"} onClick={next}>
                <img src={rigthArrow} />
              </button>
            </div>
          </div>
        </Col>
        <Col lg="8">
          <div className="carousel-rightside">
            <Carousel
              ref={sliderRef}
              arrows={false}
              swipeable={false}
              draggable={false}
              customTransition="transform 500ms ease-in-out"
              containerClass="carousel-container"
              responsive={responsive}
              infinite={true}
            >
              <div className="carouselinner-items">
                <img src={Logo} className="img-fluid w-100" />
                <div className="carouselinner-text">
                  <h3>Heading 1</h3>
                  <span>TITLE</span>
                  <p className="legend">
                    My Responsibility is manage our team and build strategy for
                    my beloved company
                  </p>
                </div>
              </div>
              <div className="carouselinner-items">
                <img src={Logo} className="img-fluid w-100" />
                <div className="carouselinner-text">
                  <h3>Heading 2</h3>
                  <span>TITLE</span>
                  <p className="legend">
                    My Responsibility is manage our team and build strategy for
                    my beloved company
                  </p>
                </div>
              </div>
              <div className="carouselinner-items">
                <img src={Logo} className="img-fluid w-100" />
                <div className="carouselinner-text">
                  <h3>Heading 3</h3>
                  <span>TITLE</span>
                  <p className="legend">
                    My Responsibility is manage our team and build strategy for
                    my beloved company
                  </p>
                </div>
              </div>
              <div className="carouselinner-items">
                <img src={Logo} className="img-fluid w-100" />
                <div className="carouselinner-text">
                  <h3>Heading 4</h3>
                  <span>TITLE</span>
                  <p className="legend">
                    My Responsibility is manage our team and build strategy for
                    my beloved company
                  </p>
                </div>
              </div>
              <div className="carouselinner-items">
                <img src={Logo} className="img-fluid w-100" />
                <div className="carouselinner-text">
                  <h3>Heading 5</h3>
                  <span>TITLE</span>
                  <p className="legend">
                    My Responsibility is manage our team and build strategy for
                    my beloved company
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
