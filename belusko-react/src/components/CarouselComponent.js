import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function HomeCarousel() {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return(
        <div>
            <Row>
                <Col md={{ offset: 1 }} xs={10} className="py-3">
                    <Carousel activeIndex={index} id="homeCarousel" onSelect={handleSelect}>
                        <Carousel.Item>
                            <img 
                            src="logoDark.svg" 
                            className="d-block w-100" 
                            alt="..." 
                            />
                            <Carousel.Caption>
                                <h3>1st slide heading</h3>
                                <p>1st slide caption paragraph</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img 
                            src="logoDark.svg" 
                            className="d-block w-100" 
                            alt="..." 
                            />
                            <Carousel.Caption>
                                <h3>2nd slide heading</h3>
                                <p>2nd slide caption paragraph</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img 
                            src="logoDark.svg" 
                            className="d-block w-100" 
                            alt="..." 
                            />
                            <Carousel.Caption>
                                <h3>3rd slide heading</h3>
                                <p>3rd slide caption paragraph</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    )
}