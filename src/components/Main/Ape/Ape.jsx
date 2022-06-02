import React from 'react';
import ape from '../../../assets/images/ape.png';
import circle from '../../../assets/images/circle.png';

export default function Ape() {
  return (
    <div className="ape-parent">
      <div className="ellipse1"></div> 
      <img className="ape-circle" src={circle} alt="circle"></img>
      <img className="relative" src={ape} />
    </div>
  )
}
