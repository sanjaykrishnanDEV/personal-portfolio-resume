import React from "react";
import { motion } from "framer-motion";
import Skills from './Skills'
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
const Home = () => {
  return (
    <div className="h-[320vh] w-screen text-white bg-slate-900 ">
      <Navbar />
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  );
};

export default Home;
