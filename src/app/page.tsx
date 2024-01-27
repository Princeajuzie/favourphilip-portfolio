// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import CourseVideo from "./course-video";
import Countdown from "./countdown";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
       <CourseVideo />
      <ExploreCourses />
     <Countdown />
      {/* <CoursesCategories /> */}
      {/* <Events /> */}
      {/* <StudentsFeedback /> */}
      {/* <TrustedCompany /> */}
      <Footer />
    </>
  );
}
