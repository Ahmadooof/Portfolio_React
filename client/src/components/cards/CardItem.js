import React from 'react';
import './Cards.css';
import '../buttons/Button.css'
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link to={props.path} target="_blank" className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt="sfe"
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <div className="project-info">
              <h4 className='cards__item__text'>{props.text}</h4>
              <p className="daw">{props.description}</p>
              <Link to={props.sourceCode} target="_blank">
                <button className="btn btn--primary">
                  View source code
                </button>
              </Link>
            </div>
            {props.svg}
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
