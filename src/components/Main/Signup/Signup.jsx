import React from 'react'
import pointer from '../../../assets/images/pointer.png';
import bottom from '../../../assets/images/bottom.png';

export default function Signup() {
  return (
    <div className="flex-col py-40">
      <div className="flex justify-center relative">
        <h2 className="get-aped">Get Aped with Us!</h2>
      </div>
      <div className="flex justify-center relative">
        <h3 className="sign-up flex border-b-2">Sign up for our newsletter</h3>
        <img className="m-2 min-h-[44px] max-h-[44px] min-w-[44px] max-w-[44px]" src={pointer} alt="pointer"></img>
      </div >
      <img className="sign-up-border" src={bottom} alt="sing-up-border"></img>
    </div>
  )
}
