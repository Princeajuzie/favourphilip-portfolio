import React from 'react'

export default function CourseVideo() {
  return (
    <div>
          <div className="video-responsive flex items-center justify-center">
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
