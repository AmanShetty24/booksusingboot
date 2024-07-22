import React from 'react';
import NavigationBar from './Components/Navbar';
import CarouselComponent from './Components/Carousel';
import AccordionComponent from './Components/Accordion';
import ButtonComponent from './Components/Button';
import CardsComponent from './Components/Cards';

function App() {
    return (
        <div>
            <NavigationBar />
            <CarouselComponent />
            <AccordionComponent />
            <ButtonComponent />
            <CardsComponent />
        </div>
    );
}

export default App;
