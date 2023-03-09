import React from "react";
import Featured from "./Featured";
import Timer from "./Timer";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-7  ">
      <div className="grid min-h-screen max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            99% OFF
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-3xl dark:text-gray-400">
            A deal you've never heard before, and probably never will :)
          </p>
          
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Tell me more
          </a>
          
        </div>
        
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="heroproduct.png"
            alt="mockup"
            className="md:pt-10 scale-75 md:scale-100 object-contain md:hover:scale-110 transition duration-500 ease-in-out cursor-pointer"
          />
        </div>
      </div>
      <Featured/>
    </section>
  );
};

export default Hero;
