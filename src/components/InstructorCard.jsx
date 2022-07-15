import React from "react";

const InstructorCard = ({
  instructorImage,
  instructorName,
  instructorPlace,
}) => {
  return (
    <div class="px-4 w-96 xl:w-3/4 border bg-base-300 rounded-3xl border-gray-800 shadow-2xl mx-auto transform transition duration-500 hover:scale-110">
      <div class="max-w-[310px] mx-auto mb-10 mt-10">
        <div class="rounded overflow-hidden mb-8 h-3/5">
          <img src={instructorImage} alt="image" class="w-full" />
        </div>
        <div>
          <h3>
            <a
              href="javascript:void(0)"
              class="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-white
                        hover:text-primary
                        "
            >
              {instructorName}
            </a>
          </h3>
          <p class="text-base text-body-color">{instructorPlace}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
