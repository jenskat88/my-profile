import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (
        <div className="cards">
            <h1>Check this out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                        src="https://github.com/jenskat88/portfolio/blob/master/img/portfolio/1.png?raw=true"
                        text="This is a static landing page built with Bootstrap, HTML, and CSS."
                        label="Project 1"
                        href="https://jenskat88.github.io/portfolio/"
                    />
                    <CardItem 
                        src="https://github.com/jenskat88/portfolio/blob/master/img/portfolio/1.png?raw=true"
                        text="This is a static landing page built with Bootstrap, HTML, and CSS."
                        label="Project 2"
                        path="/services"
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src="https://github.com/jenskat88/portfolio/blob/master/img/portfolio/1.png?raw=true"
                        text="This is a stopwatch built with Javascript"
                        label="Project 1"
                        path="/services"
                    />
                    <CardItem 
                        src="https://images.freeimages.com/images/small-previews/27d/hand-with-clipboard-1239798.jpg"
                        text="This is a daily journal that allows new entries built with Javascript"
                        label="Project 2"
                        path="/services"
                    />
                    <CardItem 
                        src="https://media.istockphoto.com/photos/a4-clipboad-on-blue-wood-table-picture-id963101192?b=1&k=6&m=963101192&s=170x170&h=QkzHGlffEtSNvRPzX_eNwrazxBuJn3oSn4tgE-ZiL7A="
                        text="This is business page built with ReactJS"
                        label="Project 3"
                        path="/services"
                    />
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default Cards;
