import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';

function Hero(props) {

    return(
        <Jumbotron className="bg-blue jumbotron-fluid">
            <Container fluid={true}>
                <Row className="justify-content-center row text-center">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Hero;