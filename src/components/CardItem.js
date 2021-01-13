import React from 'react'


function CardItem(props) {
    return (
        <>
        <li className="cards__item">
        <a href={props.url} target="_blank" rel="noreferrer">
            <div className="card__item__link">
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Project Name" className="cards__item__img" />
                </figure>
                <div class="cards__item__info">
                    <h5 className="cards__item__text">{props.text}</h5>
                </div>  
            </div>
            </a>
        </li>
        </>
    )
}

export default CardItem
