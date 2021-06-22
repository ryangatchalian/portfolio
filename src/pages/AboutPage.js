import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';


function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, please insert about me content here!</p>
            </Content>
        </div>
    );

}

export default AboutPage;