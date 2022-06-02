import React from 'react';
import star from '../../../assets/images/star.png';

export default function ApeCards(props) {

  const { person, ape } = props;
  return (
    <div className="max-w-[384px] min-w-[384px] bg-white max-h-[512px] min-h-[512px] ape-card-background flex-col border-2 border-white">
      <div className="flex justify-between px-6 py-4">
        <div className="flex items-center">
          <img src={person}></img>
          <p className="ape-card-name ml-4">@knight</p>
        </div>
        
        <div className="flex items-center">
          <img src={star}></img>
          <p className="ape-card-points text-white ml-1">213</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={ape} ></img>
      </div>

      <div className="flex justify-between px-7 py-4">
        <p className="ape-card-bid">Current bid</p>
        <p className="ape-card-bid">Ending in</p>
      </div>

      <div className="flex justify-between px-7">
        <p className="ape-card-eth">0.54 ETH</p>
        <p className="ape-card-eth"> 12h 55m 2s</p>
      </div>
    </div>
  )
}
