import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionComponent = () => {
    return (
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Header>
                        <Button variant="link">
                            Attack on Titan
                        </Button>
                    </Accordion.Header>
                </Card.Header>
                <Accordion.Body>
                    Attack on Titan follows the story of Eren Yeager and his friends who join the fight against gigantic humanoid creatures known as Titans. As they uncover the secrets behind the Titans and the world they live in, they face intense battles and uncover shocking truths about their existence.
                </Accordion.Body>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Header>
                        <Button variant="link">
                            My Hero Academia
                        </Button>
                    </Accordion.Header>
                </Card.Header>
                <Accordion.Body>
                    My Hero Academia is set in a world where almost everyone has superpowers known as "Quirks." The story follows Izuku Midoriya, a boy born without a Quirk, who dreams of becoming a hero. After inheriting the powers of the greatest hero, All Might, he enrolls in U.A. High School to train and become a pro hero.
                </Accordion.Body>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Header>
                        <Button variant="link">
                            Naruto
                        </Button>
                    </Accordion.Header>
                </Card.Header>
                <Accordion.Body>
                    Naruto is about a young ninja, Naruto Uzumaki, who seeks to become the strongest ninja and earn the respect of his village. Alongside his friends and allies, Naruto faces many challenges, uncovers dark secrets, and strives to achieve his dream of becoming Hokage, the leader of his village.
                </Accordion.Body>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Header>
                        <Button variant="link">
                            One Piece
                        </Button>
                    </Accordion.Header>
                </Card.Header>
                <Accordion.Body>
                    One Piece tells the adventure of Monkey D. Luffy and his crew of pirates as they search for the ultimate treasure, the One Piece, to become the Pirate King. The series follows their epic journey across the Grand Line, battling powerful enemies, forming alliances, and uncovering the mysteries of the world.
                </Accordion.Body>
            </Card>
        </Accordion>
    );
};

export default AccordionComponent;
