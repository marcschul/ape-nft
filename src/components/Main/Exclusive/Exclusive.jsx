import React from 'react';
import line from '../../../assets/images/line.png'

export default function Exclusive() {
  return (
    <div className="exclusive-parent">
      <div className="ellipse2"></div>
      <div>
      <img className="line1" src={line}></img>
      <img className="line2" src={line}></img>
      <img className="line3" src={line}></img>

      </div>

      <div className="flex-col absolute exclusive-text-move max-w-[580px] min-w-[580px]">
        <h1 className="flex exclusive-text mt-40">EXCLUSIVE</h1>
        <h2 className="newest-nft-text flex justify-end">newest NFT release</h2>
        <p className="bc-text text-right mt-10">The <b>BILLIONAIRE CLUB</b> is a private collection of 10 000 billionaire apes NFTs—unique digital collectibles. The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
        <p className="purple-text flex justify-end">Reveal on October 20th.</p>
      <form className="flex my-10">
        <input className="grow min-h-[68px] m-1 bg-transparent input-border text-center" placeholder="your@email.com"></input>
        <button className="m-1 min-h-[68px] min-w-[186px] register">Register</button>
      </form>
      </div>

    </div>
  )
}
