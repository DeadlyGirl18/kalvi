import React from "react";
import { Link } from "react-router-dom";

import AdBanner from "./AdBanner";
import CourseBanner from "./CourseBanner";
import Hero from "./Hero";
import { RoutePaths } from "../utilities/routes";

const Home = () => {
  return (
    <>
      <AdBanner />
      <Hero
        title="A Better Learning Era Starts Here."
        subtitle="Choose from millions of online video courses with new additions
          published every month. We help learners to increase productivity and
          reach their potential. Study any topic, anytime. Explore thousands of
          courses for the lowest price ever!"
        buttonsEnabled
        searchEnabled
        searchPlaceholder="Search course..."
      />
      <CourseBanner
        title="Our Featured Courses"
        subtitle="Choose from a wide variety of online video courses."
      />
      <div className="flex items-center align-middle justify-center my-4">
        <Link to={RoutePaths.Courses}>
          <button class="btn btn-outline w-96">View All</button>
        </Link>
      </div>
      <CourseBanner
        title="Our Top Discount Courses"
        subtitle="Choose from a wide variety of online video courses."
      />
      <div className="flex items-center align-middle justify-center my-4">
        <Link to={RoutePaths.Courses}>
          <button class="btn btn-outline w-96">View All</button>
        </Link>
      </div>
      <CourseBanner
        title="Our Best Selling Courses"
        subtitle="Choose from a wide variety of online video courses."
      />
      <div className="flex items-center align-middle justify-center my-4">
        <Link to={RoutePaths.Courses}>
          <button class="btn btn-outline w-96">View All</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
