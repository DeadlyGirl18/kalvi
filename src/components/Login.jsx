import React from "react";
import logo from "../assets/logo.png";

const Login = () => {
  return (
    <>
      <div class="container mx-auto lg:mt-20 ">
        <div class="flex flex-wrap items -mx-4">
          <div class="w-full px-4">
            <div
              class="
               max-w-[525px]
               mx-auto
               text-center
               bg-base-300
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               "
            >
              <div class="mb-10 md:mb-16 text-center">
                <a
                  href="javascript:void(0)"
                  class="inline-block max-w-[160px] mx-auto"
                >
                  <img src={logo} alt="logo" />
                  <h2 class="mt-6 text-center text-white text-3xl font-semibold">
                    Login
                  </h2>
                </a>
              </div>
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    class="
                        w-full
                        rounded-md
                        py-3
                        px-5
                        bg-gray-700
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border
                        focus:border-primary
                        "
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    class="
                    w-full
                        rounded-md
                        py-3
                        px-5
                        bg-gray-700
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border
                        focus:border-primary
                        "
                  />
                </div>
                <div class="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    class="
                        w-full
                        rounded-md
                        border
                        border-primary
                        py-3
                        px-5
                        bg-primary
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                  />
                </div>
              </form>
              <a
                href="javascript:void(0)"
                class="
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:underline hover:text-primary
                  "
              >
                Forgot Password?
              </a>
              <p class="text-base text-[#adadad]">
                Not a member yet?
                <a
                  href="javascript:void(0)"
                  class="text-primary text-lg hover:text-primary-focus"
                >
                  {" "}
                  Sign Up
                </a>
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
