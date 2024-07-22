import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import './CardsComponent.css'; // Correct path to the CSS file

const CardsComponent = () => {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Boku_no_Hero_Academia_Volume_1.png/220px-Boku_no_Hero_Academia_Volume_1.png" className="card-img" />
                <Card.Body>
                    <Card.Title>My Hero Academia</Card.Title>
                    <Card.Text>It's a story of a boy wanting to be a hero.</Card.Text>
                    <Button variant="primary" onClick={() => alert('My Hero Academia')}>Learn More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://pbs.twimg.com/media/DyiOJBqWsAE63Fa.jpg" className="card-img" />
                <Card.Body>
                    <Card.Title>Jujutsu Kaisen 1</Card.Title>
                    <Card.Text>The story of Itadori Yuji.</Card.Text>
                    <Button variant="primary" onClick={() => alert('Jujutsu Kaisen 1')}>Learn More</Button>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://i.pinimg.com/236x/36/3d/d6/363dd6296ac84dc8876b13d734756771.jpg" className="card-img" />
                <Card.Body>
                    <Card.Title>Jujutsu Kaisen 2</Card.Title>
                    <Card.Text>A story of Yuji and his team.</Card.Text>
                    <Button variant="primary" onClick={() => alert('Jujutsu Kaisen 2')}>Learn More</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default CardsComponent;
