import React from 'react';
import { Link } from 'react-router-dom';
import './Cards';

function CardItem(props) {
  return (
    <>
      <li className='cards__item' >
          <div className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='image'
              src={props.src}
           
            />
          </div>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
      </li>
    </>
  );
}

export default CardItem;