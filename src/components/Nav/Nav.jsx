import React from 'react';
import { Link } from 'react-router-dom';
import bc from '../../assets/images/bc.png';

export default function Nav() {
  return (
    <div className="flex justify-between px-20 pt-6 pb-1 bg-black">

      <div className="flex">
        <Link to={'/'}>
          <img src={bc} alt="bclogo" />  
        </Link>
      </div>

      <div className="flex items-center">
        <Link className="p-6 nav-text" to={'/'}>
          Home  
        </Link>

        <Link className="p-6 nav-text" to={'/'}>
          Features
        </Link>

        <Link className="p-6 nav-text" to={'/'}>
          Roadmap
        </Link>

        <Link className="p-6 nav-text" to={'/'}>
          Team
        </Link>

        <Link className="px-5 py-2 join-our-discord nav-text" to={'/'}>
          Join Our Discord
        </Link>
      </div >

    </div>
  )
}
