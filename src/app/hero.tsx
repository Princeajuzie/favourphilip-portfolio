"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/user8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className=" md:w-fit h-fit  mx-auto   m-auto">
        <div className="grid grid-cols-12  text-center lg:text-left ">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 px-5 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7 border-3 " >
         
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            How to make $5,000+ Per Month Selling Products on Amazon as a Nigerian.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start flex-wrap">
              <Button color="gray">view all courses</Button>
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
