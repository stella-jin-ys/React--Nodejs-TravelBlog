import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../../navbar/Hamburger';
import './resources.css'

function Resources() {
  return (
    <div className='resources'>
      <Hamburger/>
      <div className='resource-header'>
        <h2>TRAVEL RESOURCES</h2>
        <p>Here recommendsd good resources for booking flight tickets, accomodations, insurance and transportation</p>
      </div>
      <div className='resource-content'>
        <div >
          <h3>Airfare</h3>
          <ul>
            <li><Link to='https://www.skyscanner.se/?%3D&associateid=AFF_TRA_19354_00001&irclickid=_v3hg00qj99kf6wq22ym6oqyjlf2xvjalinjb2kmi00&irgwc=1&previousCultureSource=COOKIE&redirectedFrom=www.skyscanner.com&utm_campaign=&utm_medium=affiliate&utm_source=214481-mattk123' className='link'>Skyscanner</Link></li>
            <li><Link to='https://tripplanner.airtreks.com/?utm_source=cake-rtwsecure&utm_medium=affiliate&utm_content=6&utm_campaign=39#/search&a=39&o=6' className='link'>Airtreks</Link></li>
            <li><Link to='https://www.momondo.se/?ispredir=true' className='link'>Momondo</Link></li>
          </ul>
        </div>
        <div>
          <h3>Accommodation</h3>
          <ul>
            <li><Link to='https://www.booking.com/index.html?aid=362916'>Booking</Link></li>
            <li><Link to='https://www.agoda.com/?cid=1841944&tag=6759b9f4ecde11ec83b205560a18050e'>Agoda</Link></li>
            <li><Link to='https://www.hostelworld.com/?source=affiliate-PHG-1101lHtj&affiliate=PHG&ref_id=1100lvTEsUP5'>Hostelworld</Link></li>
          </ul>
        </div>
        <div>
          <h3>Travel insurance</h3>
          <ul>
            <li><Link to='https://safetywing.com/nomad-insurance/?referenceID=24768462&utm_source=24768462&utm_medium=Ambassador'>Safety Wing</Link></li>
            <li><Link to='https://medjetassist.com/?utm_source=nomadicmatt&utm_medium=partners&utm_campaign=partner%20pages'>Medjet</Link></li>
            <li><Link to='https://www.insuremytrip.com/?linkId=5d1cb667a65d12041eca44ec'>Insure My Trip</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Resources