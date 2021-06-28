import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';


function AboutPage(props) {

    return(
        <div>
            <Hero classname="font-normal text-white" title={props.title} />

            <Content>
                <p>
                    I'm an Electrical and Computer Engineering graduate from Rutgers University - New Brunswick class of 2017. 
                </p>
                <p>
                    Previously, I was an Electrical Engineer at Arup, an architectural engineering firm, for 3 years. Alongside electrical design, I spent time coding our design processes and realized my passion for code.
                </p>
                <p>
                    Now I'm looking for my first full-time role as a Software Engineer.
                </p>       
            </Content>

            <button className="dl-button">
                <a
                    href="/RyanAnthonyGatchalian-Resume.pdf"
                    className="dl-a"
                    download="RyanAnthonyGatchalian-Resume.pdf"
                >
                    Download Resume 
                </a>
            </button>    
        </div>
    );

}

export default AboutPage;