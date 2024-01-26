"use client"
import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function CourseVideo() {
  return (
    <div>
          <div className="video-responsive flex flex-col items-center justify-center px-10 ">
          <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
         Why You Need this Course 🤔
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
        Imagine living in Nigeria / Africa and you own a store on Amazon selling products to millions of people and getting paid in dollars ...Its not too late because the best time to start is NOW!!
        </Typography>
      </div>
      <div className="aspect-w-16 aspect-h-9">
      <video controls width="500" height="300">
  <source src="/video/cou.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

    </div>

          </div>
    </div>
  )
}
