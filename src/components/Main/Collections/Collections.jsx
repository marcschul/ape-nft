import React from 'react';
import ApeCard from '../ApeCard/ApeCard';
import person1 from '../../../assets/images/person1.png';
import person2 from '../../../assets/images/person2.png';
import person3 from '../../../assets/images/person3.png';
import ape1 from '../../../assets/images/ape1.png';
import ape2 from '../../../assets/images/ape2.png';
import ape3 from '../../../assets/images/ape3.png';
import ape4 from '../../../assets/images/ape4.png';
import ape5 from '../../../assets/images/ape5.png';
import ape6 from '../../../assets/images/ape6.png';
import dots1 from '../../../assets/images/dots1.png';
import dots2 from '../../../assets/images/dots2.png';


export default function Collections() {
  return (
    <div className="px-12 relative">

      <img className="dots1" src={dots1}></img>
      <img className="dots2" src={dots2}></img>


      <h1 className="collections collections-grad">Collections</h1>
      <p className="collections-description-text pb-20">With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</p>

      <div className="flex justify-between">
        <ApeCard 
          ape={ape1}
          person={person1}
        />
        <ApeCard 
          ape={ape2}
          person={person2}
        />
        <ApeCard 
          ape={ape3}
          person={person3}
        />
      </div>

      <div className="flex justify-between my-20">
      <ApeCard 
          ape={ape4}
          person={person1}
        />
        <ApeCard 
          ape={ape5}
          person={person2}
        />
        <ApeCard 
          ape={ape6}
          person={person3}
        />
      </div>
    </div>

    
  )
}
