import React from 'react';
import bc from '../../../assets/images/bc.png';
import instagram from '../../../assets/images/instagram.png';
import discord from '../../../assets/images/discord.png';
import twitter from '../../../assets/images/twitter.png';


import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="px-10 mainbg relative">
      <div className='border-t footer-border my-4'>
        <div className="flex justify-between">
          <div className='flex relative mb-10 my-6'>
            <Link to={'/'}>
              <img src={bc} alt="bclogo" />  
            </Link>

            <Link className="flex items-center footer-text pl-14" to={'/'}>
              Terms of Service
            </Link>

            <Link className="flex items-center footer-text px-10" to={'/'}>
              Privacy Policy
            </Link>
          </div>

          <div className='flex items-center'>
            <Link to={'/'}>
              <img className='flex mx-2' src={twitter} alt="twitter" />  
            </Link>

            <Link to={'/'}>
              <img className='flex mx-2' src={discord} alt="discord" />  
            </Link>

            <Link to={'/'}>
              <img className='flex mx-2 mr-16' src={instagram} alt="instagram" />  
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
