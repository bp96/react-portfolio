import React from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profilePic.jpg";
import { motion } from "framer-motion";

const heroVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={heroVariants(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Brijesh Patel
            </motion.h1>
            <motion.span
              variants={heroVariants(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Developer
            </motion.span>
            <motion.div
              variants={heroVariants(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl font-light tracking-tighter pb-4"
            >
              {HERO_CONTENT}
              <div className="mt-4">
                <a
                  target="_blank"
                  href="https://brijeshpatel.co.uk/uploaded_files/CV-Brijesh%20Patel.pdf"
                  className="bg-neutral-700 text-purple-200 hover:text-white hover:bg-blue-600 py-2 px-4 rounded-xl mr-2 border-2"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
