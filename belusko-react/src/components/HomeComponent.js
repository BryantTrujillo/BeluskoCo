import React from 'react';

import {
    Col,
    Container,
    Row
} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

// import Footer from './FooterComponent';
import HomeCarousel from './CarouselComponent';

function HomeBody() {
    return(
        <div>
            <Row>
                <Col xs={12} className="mb-4 py-3" id="oddContent">
                    <h5 id="headerText">Main Element No. 2</h5>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas ex atque placeat tempora odio ab, id soluta sequi quam ipsum recusandae sit dolorem modi accusantium, vitae sunt? Amet, corrupti dolorum!</p>
                </Col>
            </Row>

            <Row>
                <Col xs={12} md={{ span: 5, offset: 1}} lg={6} className="pb-4">
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5" className="pt-2">
                                Upcoming events{' '}
                                <Badge pill bg="danger">
                                    New
                                </Badge>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&mode=MONTH&title=Jos.%20V.%20Belukso%20Co.&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043" title="Home Calendar" width="100%" height="100%" frameBorder="0" scrolling="no" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={5} lg={4} className="pb-1">
                    <h3 id="headerText">
                        Noteworthy additions
                    </h3>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam quis dolor nobis recusandae veritatis facere odit corporis? Laborum quaerat id dolorem nostrum libero?
                    </p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, delectus deleniti? Obcaecati, ullam repellendus? Assumenda voluptates repellat fuga iusto vitae eveniet consequuntur eligendi itaque?
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex amet ab earum nihil facere vero error! Animi, quas. Cum laudantium distinctio molestias ducimus iusto.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit ut, doloremque unde amet nisi doloribus enim reprehenderit quam deserunt sequi nemo libero obcaecati?
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default function Home() {
    return(
        <div>
            <Container>
                <HomeCarousel />
                <HomeBody />
            </Container>
        </div>
    )
}