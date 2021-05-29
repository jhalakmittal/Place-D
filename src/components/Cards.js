import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import './images';
import "../../frontend/public/jhalak.jpeg";
function Cards() {
  return (
    <div className='cards'>
      <h1>Team Members</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../frontend/public/jhalak.jpeg'
              text='Jhalak Mittal'
              label='Read more'
              path='/services'
            />
            <CardItem
              src='../../frontend/public/sneha.jpeg'
              text='Sneha Baser'
              label='Read more'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../frontend/public/snehal.jpeg'
              text='Snehal Maurya'
              label='Read more'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../frontend/public/stakshi.jpeg'
              text='Stakshi Pandey'
              label='Read more'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;