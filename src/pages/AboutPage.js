import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';


function AboutPage(props) {

    return(
        <div>
            <Hero classname="font-normal text-white" title={props.title} />

            <Content>
                <p>I'm an Electrical and Computer Engineering graduate from Rutgers University - New Brunswick class of 2017. <br></br> <br></br> Previously, I was an Electrical Engineer at Arup, an architectural engineering firm, for 3 years. Alongside electrical design, I spent time coding our design processes and realized my passion for code.
                    <br></br> <br></br>Now I'm looking for my first full-time role as a Software Engineer.
                </p>
            </Content>
        </div>
    );

}

export default AboutPage;