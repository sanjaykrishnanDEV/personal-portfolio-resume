import React from "react";
import ai_profile from "./assets/ai_profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[60vh]  p-5 flex flex-row justify-center text-6xl text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 flex flex-col justify-center text-start w-1/2 "
      >
        <span className="m-2">Hi!</span>
        <span className="m-2">I am sanjay krishnan</span>
        <span className="m-2 text-red-600 rotate-0">Full Stack Developer</span>
        <motion.span
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="m-2 text-red-700 rotate-0 text-5xl"
        >
          Frontend Developer
        </motion.span>
        <motion.span
          initial={{ x: 800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="m-2 text-red-800 rotate-0 text-4xl"
        >
          Backend Developer
        </motion.span>
        <motion.span
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="m-2 text-red-800 rotate-0 text-4xl"
        >
          Reactjs Developer
        </motion.span>
      </motion.div>
      <div>
        <motion.img
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 100,
            bounce: 0.25,
            damping: 50,
            mass: 0.5,
          }}
          src={ai_profile}
          className="h-[8em] w-[5em] rounded-full shadow-2xl shadow-slate-100"
        />
      </div>
    </div>
  );
};

export default Hero;
