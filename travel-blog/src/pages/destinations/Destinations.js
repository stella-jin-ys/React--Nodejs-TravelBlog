import React from 'react';
import asia from '../../assets/asia.jpeg'
import europe from '../../assets/europe.jpeg';
import africa from '../../assets/africa.webp';
import northamerica from '../../assets/northamerica.jpeg';
import southamerica from '../../assets/southamerica.jpeg'
import './destinations.css'

const imgs = [asia, europe, africa, northamerica, southamerica]

function Destinations() {
  return (
    <div className='destinations'>
       <h2>Destinations</h2>
       <h4>Luxury vacation or backpack trip </h4>
       <div className='img-container'>
        {imgs.map(img => { 
           return <img src={img} alt='destination'/>
        })}
        </div>
    </div>
  )
}

export default Destinations