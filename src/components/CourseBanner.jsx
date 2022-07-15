import React from "react";
import { Link } from "react-router-dom";

import CourseCard from "./CourseCard";
import { RoutePaths } from "../utilities/routes";

const CourseBanner = ({ title, subtitle }) => {
  return (
    <>
      <div class="w-full px-4 mt-12">
        <div class="text-center mx-auto mb-[60px] lg:mb-10 max-w-[510px]">
          <h2
            class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-white
                  mb-4
                  "
          >
            {title}
          </h2>
          <p class="text-base text-body-color">{subtitle}</p>
        </div>
      </div>
      <div class="p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10">
        <CourseCard
          courseImage="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?w=2000"
          courseTag="Finance"
          courseLevel="Beginner"
          courseTitle="Intro to Finance"
          courseAuthor="Chris Benjamin"
          courseRating="4"
          coursePrice="495"
        />
        <CourseCard
          courseImage="https://static.vecteezy.com/system/resources/previews/002/713/995/original/programmer-typing-data-code-on-computer-for-software-development-vector.jpg"
          courseTag=" Programming"
          courseLevel="Intermediate"
          courseTitle="Beginning C++"
          courseAuthor="Tim Buchalka"
          courseRating="4"
          coursePrice="495"
        />
        <CourseCard
          courseImage="https://www.springboard.com/blog/wp-content/uploads/2022/01/is-programming-hard-a-guide-to-getting-started-in-2022-scaled-1.jpeg"
          courseTag="Web Development"
          courseLevel="Expert"
          courseTitle="A - Z Web Programming"
          courseAuthor="Yogesh"
          courseRating="4"
          coursePrice="495"
        />
      </div>
    </>
  );
};

export default CourseBanner;
