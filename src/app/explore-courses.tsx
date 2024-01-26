"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/books/book1.jpg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Fast Business Growth Without Limit",
    label: "from $99",
    desc: "If you are confused about how to start a business or you have started one already and you are struggling with sales ,not having customers and you are looking for answers then  You have come to the right place where you will get the answers you seek.",
  },

];

export function ExploreCourses() {
  return (
    <section className="px-8 mt-5">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Explore Courses
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Browse through my courses and find the one that
          fits your needs.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14 ">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
