import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const content = [
  {
    title: "Warm, welcoming finds that ship for free.",
    button: "Shop Now",
    image: "/img/painting.jpg"
  },
  {
    title: "Sweet splemdid DIYs.",
    button: "Shop last minute",
    image: "/img/hearts2.jpg"
  },
  {
    title: "Great original gifts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Shop our gift guides",
    image: "/img/coffee.jpg"
  }
];
class Carousel extends Component {
  render() {
    return (
      <div>
        <Slider autoplay={2000}>
          {content.map((item, index) => {
            return (
              <div
                className="carousel-image"
                key={index}
                style={{
                  background: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center center"
                }}
              >
                <div
                  className="center"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                  }}
                >
                  <h1>{item.title}</h1>
                  <button>{item.button}</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
