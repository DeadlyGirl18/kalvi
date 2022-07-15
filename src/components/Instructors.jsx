import React from "react";
import { Link } from "react-router-dom";

import { Hero, CourseBanner, InstructorCard } from "./";
import { RoutePaths } from "../utilities/routes";

const Instructors = () => {
  return (
    <>
      <Hero title="Meet our Instructors" />
      <div class="p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10">
        <InstructorCard
          instructorImage="https://i.pinimg.com/originals/f9/d7/b4/f9d7b48367e4acf82c21c504c1d9b6fb.jpg"
          instructorName="Name 1"
          instructorPlace="India"
        />
        <InstructorCard
          instructorImage="https://i.pinimg.com/originals/f9/d7/b4/f9d7b48367e4acf82c21c504c1d9b6fb.jpg"
          instructorName="Name 1"
          instructorPlace="India"
        />
        <InstructorCard
          instructorImage="https://i.pinimg.com/originals/f9/d7/b4/f9d7b48367e4acf82c21c504c1d9b6fb.jpg"
          instructorName="Name 1"
          instructorPlace="India"
        />
        <InstructorCard
          instructorImage="https://i.pinimg.com/originals/f9/d7/b4/f9d7b48367e4acf82c21c504c1d9b6fb.jpg"
          instructorName="Name 1"
          instructorPlace="India"
        />
        <InstructorCard
          instructorImage="https://i.pinimg.com/originals/f9/d7/b4/f9d7b48367e4acf82c21c504c1d9b6fb.jpg"
          instructorName="Name 1"
          instructorPlace="India"
        />
        <InstructorCard
          instructorImage="https://i.pinimg.com/originals/f9/d7/b4/f9d7b48367e4acf82c21c504c1d9b6fb.jpg"
          instructorName="Name 1"
          instructorPlace="India"
        />
      </div>
    </>
  );
};

export default Instructors;
