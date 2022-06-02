import React from 'react';
import ticket from '../../../assets/images/ticket.png'

export default function GoldenTicket() {
  return (
    <div className="flex relative golden-ticket-bg max-w-full min-w-full max-h-[433px] min-h-[433px]">
      <div className="px-24 py-14 min-w-[950px] max-w-[950px]">
        <h1 className='golden-guests-text py-2'>The Golden Guests</h1>
        <p className='golden-guests-desc-txt py-2 pb-10'>The Golden Guests edition by the Billionaire Club are the rarest NFTs. They are all hand drawn and have no element in common with the regular collection.
        </p>
        <h2 className="gt-join-us flex justify-center items-center">Join us to register for the Presale</h2>
      </div>
      <img className="min-w-[648px] max-w-[648px] min-h-[648px] max-h-[648px] gt-position" src={ticket}></img>
    </div>
  )
}
