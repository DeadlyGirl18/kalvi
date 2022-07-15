import React from "react";
import { Hero } from "./";
import { CourseCard } from "./";

const Courses = () => {
  return (
    <>
      <Hero
        title="Browse our course collection."
        subtitle="Choose from millions of online video courses with new additions
          published every month. We help learners to increase productivity and
          reach their potential. Study any topic, anytime. Explore thousands of
          courses for the lowest price ever!"
        searchEnabled
        searchPlaceholder="Search course..."
      />
      <div className="flex flex-row">
        <div class="mt-10 ml-auto mr-28 bg-gray">
          <label for="my-modal" class="btn modal-button text-white mr-3">
            Filter Categories
          </label>
          <input type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box">
              <div class="grid h-20 rounded-box place-items-start">
                <h1>Type</h1>
              </div>
              <div class="divider">OR</div>
              <div class="grid h-20 card bg-base-300 rounded-box place-items-center">
                content
              </div>
              <div class="modal-action">
                <label for="my-modal" class="btn btn-primary">
                  Apply Filters
                </label>
                <label for="my-modal" class="btn btn-outline">
                  Reset
                </label>
                <label for="my-modal" class="btn btn-error">
                  Cancel
                </label>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn text-white m-1">
              Sort By
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <a>All</a>
              </li>
              <li>
                <a>Best Sellers</a>
              </li>
              <li>
                <a>Best Ratings</a>
              </li>
              <li>
                <a>Price - Low to High</a>
              </li>
              <li>
                <a>Price - High to Low</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="p-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-10">
        <CourseCard
          courseImage="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?w=2000"
          courseTag="Finance"
          courseLevel="Beginner"
          courseTitle="The Complete Introduction To Accounting and Finance"
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
        <CourseCard
          courseImage="https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-40450.jpg?w=2000"
          courseTag="Finance"
          courseLevel="Beginner"
          courseTitle="The Complete Introduction To Accounting and Finance"
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

      <div class="flex flex-col items-center  h-20 mt-10">
        <div class="btn-group">
          <button class="btn bg-base-300 ">«</button>
          <button class="btn bg-base-300 text-white ">Page 1 - 20</button>
          <button class="btn bg-base-300 ">»</button>
        </div>
      </div>
    </>
  );
};

export default Courses;
