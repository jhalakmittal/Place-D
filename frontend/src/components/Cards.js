import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import './images';
// import '../image/Sneha.jpg';
// import '../image/Snehal.jpeg';
// import '../image/Stakshi.jpeg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Team Members</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/image/Jhalak.jpeg'
              text='Jhalak Mittal ~{"\n"} mm' 
            />
            <CardItem
              src='/image/Sneha.jpg'
              text='Sneha Baser'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/image/Snehal.jpeg'
              text='Snehal Maurya'
            />
            <CardItem
              src='/image/Stakshi.jpeg'
              text='Stakshi Pandey'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;