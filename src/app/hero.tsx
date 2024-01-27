"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import Link from "next/link";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10  bg-red-700 mb-96">
      <Image
        width={1200}
        height={1200}
        src="/image/user8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className=" md:w-fit h-fit  mx-auto   m-auto">
        <div className="grid grid-cols-12  text-center lg:text-left ">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 px-5 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7 border-3  mt-[310px]" >
         
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            YOUR BUSINESS IS ABOUT TO CHANGE FOREVER!!
           
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start flex-wrap">
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
              <Button color="gray" variant="outlined">
                see pricing
              </Button>
            </div>
        
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
