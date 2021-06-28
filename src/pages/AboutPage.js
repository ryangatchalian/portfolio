import React from 'react';
import { Container } from 'react-bootstrap';
import Content from '../components/Content';
import Hero from '../components/Hero';


function AboutPage(props) {

    return(
        <div>
            <Hero classname="font-normal text-white" subTitle={props.subTitle} />

            <Content>
                <p>
                    I'm an Electrical and Computer Engineering graduate from Rutgers University - New Brunswick class of 2017. 
                </p>
                <p>
                    Previously, I was an Electrical Engineer at Arup, an architectural engineering firm, for 3 years. 
                    Alongside electrical design, I spent time coding our design processes and realized my true passion for code!
                </p>
                <p>
                    After Arup, I've spent my time working with a team on Gohort, a collaborative trip planning web application. With this team, we practice
                    agile methodolgies in our software development process, which has helped me in my transition towards Software Engineering. Working with
                    this team helps me practice my skills and share my knowledge with other team members.
                </p>
                <p>
                    Now I'm looking for my first full-time role as a Software Engineer! Feel free to reach out to me. Let's talk!
                </p>       
                <br></br>
            </Content>
            
            <div class="d-flex justify-content-center">
                <button className="dl-button">
                    <a
                        href="/RyanAnthonyGatchalian-Resume.pdf"
                        className="bg-color hover:bg-blue-500 p-2 rounded text-white"
                        download="RyanAnthonyGatchalian-Resume.pdf"
                    >
                        Download Resume 
                    </a>
                </button>    
            </div>
        </div>
    );

}

export default AboutPage;