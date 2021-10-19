import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
const img1 = "https://i.ibb.co/ZM2jKn4/5438645.png";
const img2 = "https://i.ibb.co/cyZDLrw/doctor-standing-with-folder-stethoscope.png";
const img3 = "https://i.ibb.co/S0sL53s/doctor-with-stethoscope-hands-hospital-background.png";


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        className=" d-block w-100 img-fluid"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-dark">Find a Doctor</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className=" d-block w-100 h-75 img-fluid"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-75 img-fluid"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;