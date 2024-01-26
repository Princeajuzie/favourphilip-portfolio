import { Button } from '@material-tailwind/react'
import React from 'react'

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
      <span className="text-[#212121] font-bold text-xl sm:text-5xl">110</span>
      <p>Days</p>
    </div>
    <div className="m-2 sm:m-5">
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
  <a
                href="https://www.material-tailwind.com/blocks"
                target="_blank"
              >
                <Button color="gray">Contact Me</Button>
              </a>
  </div>
</div>

      
    </div>
  )
}
