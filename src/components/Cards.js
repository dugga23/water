import React from 'react';
import './Cards.css';
import CardItem from './Carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper flex flex-col gap-12'>
          <ul className='flex flex-col md:flex-row gap-5'>
            <CardItem
              src='images/human-hand-holding-bottle-water.jpg'
              text='Water4All has been a beacon of hope, providing free water to those in need, truly embodying the essence of humanity'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/360_F_715125412_SDw4MSiX0CofGQwfTXKdcpnAbe7cYwYk.jpg'
              text='Countless lives have been touched by the simple yet profound gift of clean, safe water.'
              label='FREE OF COST'
              path='/services'
            />
          </ul>
          <ul className='cards__items flex flex-col md:flex-row gap-5'>
            <CardItem
              src='images/49300.jpg'
              text='Grateful beyond words for the lifesaving mission of Water4All, bringing relief and dignity to communities worldwide.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/1074757_4157.jpg'
              text='Water4All is not just about quenching thirst its about nourishing souls and restoring faith in the power of compassion.'
              label='FREE OF COST'
              path='/products'
            />
            <CardItem
              src='images/2149479949.jpg'
              text='With every drop of water donated, Water4All reminds us that even the smallest act of kindness can make waves of difference in the world.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
