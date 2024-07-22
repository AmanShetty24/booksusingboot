import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselComponent.css'; // Import the CSS file

const CarouselComponent = () => {
    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://pbs.twimg.com/media/EXTdpWuXkAUs_DI.jpg:large"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/736x/c0/56/9e/c0569ec969ef7d904a500528b8928e5d.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://pbs.twimg.com/media/FWC3LL1XkAkZOpk.jpg:large"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;
