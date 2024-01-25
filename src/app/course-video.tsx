"use client"
import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function CourseVideo() {
  return (
    <div>
          <div className="video-responsive flex flex-col items-center justify-center py-10 ">
          <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
         Why You Need this Course 🤔
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
        Imagine living in Nigeria / Africa and you own a store on Amazon selling products to millions of people and getting paid in dollars ...Its not too late because the best time to start is NOW!!
        </Typography>
      </div>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/S0Iqy3X-N-Y`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
    </div>
  )
}
