import React from 'react';
import { Link } from 'react-router-dom'
import './Cards.css'

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a target="_blank" className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt="sfe"
              src={props.src}

            />
          </figure>
          <br className="line"></br>
          <div className='cards__item__info'>
            <h4 className='cards__item__text'>{props.text}</h4>
            <p className="daw">{props.description}</p>
            {props.svg}
          </div>
        </a>
      </li >
    </>
  );
}

export default CardItem;