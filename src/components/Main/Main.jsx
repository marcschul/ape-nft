import React from 'react';
import Ape from './Ape/Ape';
import Exclusive from './Exclusive/Exclusive';
import Collections from './Collections/Collections';
import GoldenTicket from './GoldenTicket/GoldenTicket';
import Signup from './Signup/Signup';
import Footer from './Footer/Footer';

export default function Main() {
  return (
    <div className="mainbg overflow-hidden">
      <div className="flex text-white">
        <Ape />
        <Exclusive />
      </div>
      <div>
        <Collections />
      </div>
      <div>
        <GoldenTicket />
      </div>
      <div>
        <Signup />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
