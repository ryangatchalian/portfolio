import React from 'react';

import Card from '../components/Card';
import gohort from '../assets/images/gohort.png';
import headshot from '../assets/images/headshot.png';
import twitch from '../assets/images/twitch.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Gohort',
                    subTitle: 'Trip planning made easy.',
                    imgSrc: gohort,
                    link: 'https://www.gohort.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Ryan Gatchalian',
                    subTitle: 'More about me!',
                    imgSrc: headshot,
                    link: '/about',
                    selected: false
                },
                {
                    id: 2,
                    title: 'TwitchBreakoutGames',
                    subTitle: 'An API to see the "breakout games" of Twitch.',
                    imgSrc: twitch,
                    link: 'https://github.com/ryangatchalian/TwitchBreakoutGames',
                    selected: false
                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;