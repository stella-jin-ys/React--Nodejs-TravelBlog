import React from 'react';
import {Facebook, Instagram, Twitter, GitHub} from '@mui/icons-material';
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
       <div className='top'>
            <h3>|TRAVEL BLOG|</h3>
            <div className='social-icon'>
                    <Facebook className='icon' />
                    <Instagram className='icon' />
                    <Twitter className='icon' />
                    <GitHub className='icon' />
            </div>
        </div>
        <div className='bottom'>
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Advertising</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>Terms</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                    <li>Contact</li>
                    
                </ul>
        </div>
    </div>
  )
}

export default Footer