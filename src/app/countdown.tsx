"use client"
import { Button } from '@material-tailwind/react'
import React from 'react';
import Link from 'next/link';

export default function Countdown() {
  return (
    <div className='flex item-center justify-center px-7 mt-8'>
        <div
  className=" relative rounded-md h-screen w-full flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url(/image/bgcount.jpg)",
      backgroundPosition: "top center",
  }}
>
  <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900/70 opacity-90 rounded-lg " />
  <div className="z-10 text-sm">WE ARE COMING SOON!</div>
  <div className="flex items-end justify-center z-10">
    <div className="m-2 sm:m-5">

    <div className="m-2 sm:m-5">
    </div>
      <span className="text-[#212121] font-bold text-xl sm:text-5xl">13</span>
      <p>Hours</p>
    </div>
    <div className="m-2 sm:m-5">
      <span className="text-[#212121] font-bold text-xl sm:text-5xl">47</span>
      <p>Minutes</p>
    </div>
    <div className="m-2 sm:m-5">
      <span className="text-[#212121] font-bold text-xl sm:text-5xl">20</span>
      <p>Seconds</p>
    </div>
  </div>
  <div className="rounded-md shadow z-10 mt-5">
  <Link
                href="https://t.me/+uB2rVR9mGeRiMDg0"
                target="_blank"
              >
                <Button color="gray" className='flex items-center justify-center gap-3' >Join now  <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Telegram"
      viewBox="0 0 512 512"
      width="24px"
      height="24px"

    >
      <rect width={512} height={512} rx="15%" fill="#37aee2" />
      <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144" />
      <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
      <path
        fill="#f6fbfe"
        d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
      />
    </svg> </Button>
              </Link>
  </div>
</div>

      
    </div>
  )
}
