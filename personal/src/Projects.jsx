import React from "react";
import flix from "../src/assets/flix.png";
import maxmart from "../src/assets/maxmart.png";
import foodify from "../src/assets/foodify.png";
import { FaLinkedin,FaGithub, } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Projects = () => {
  return (
    <div className="mt-36">
      <p className="text-center text-6xl mb-11">projects</p>
      <div className="flex justify-evenly  items-center">
        <div className="border w-60 h-72 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-slate-300 ">
          <img src={flix} alt="flix" className="rounded-xl" />
          <span className="font-bold mt-2">Flixx</span>
          <div className="flex">
            <ol>
              <li className="text-center">
                <p>Flixx and Chill</p>
              </li>

              <li className="px-3">
                <a
                  href="https://flixx-henna.vercel.app/"
                  target="blank"
                  className="border  p-1 bg-slate-500 rounded-xl flex justify-center"
                >
                  Live Demo
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="border w-56 h-72 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-slate-300 ">
          <img src={maxmart} alt="flix" className="rounded-xl" />
          <span className="font-bold mt-2">Flixx</span>
          <div className="flex">
            <ol>
              <li className="text-center">
                <p>A wholesome shopping experience on your fingertips</p>
              </li>

              <li className="px-3">
                <a
                  href="https://maxmart-complete-frontend-shopping-website.vercel.app/home"
                  target="blank"
                  className="border  p-1 bg-slate-500 rounded-xl flex justify-center"
                >
                  Live Demo
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="border w-56 h-72 flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-slate-300 ">
          <img src={foodify} alt="foodify" className="rounded-xl" />
          <span className="font-bold mt-2">Foodify</span>
          <div className="flex">
            <ol>
              <li className="text-center">
                <p>Delecious food - delete depression❤</p>
              </li>

              <li className="px-3">
                <a
                  href="https://foodify-gkig.vercel.app/"
                  target="blank"
                  className="border  p-1 bg-slate-500 rounded-xl flex justify-center"
                >
                  Live Demo
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center text-5xl z-auto">
        {/* <img src={kitty} className="h-24 w-40 mix-blend-multiply relative left-52 -top-6 z-10"/> */}
        <a href="https://github.com/sanjaykrishnanDEV">
          <p className="border w-fit p-2 rounded-md bg-slate-700 cursor-pointer z-100">
            Github Link
          </p>
        </a>
      </div>
      <div className="mt-40 flex flex-col items-center justify-center">
        <span className="text-5xl">Okay Lets connect...</span>
        <div className="flex justify-around mt-20 ">
          <a href="https://www.linkedin.com/in/sanjaykrishnane/">
            <button>
              <FaLinkedin size={30} className="cursor-pointer me-5" />
            </button>
          </a>
          <a href="https://github.com/sanjaykrishnanDEV">
            <button>
              <FaGithub size={30} className="cursor-pointer me-5" />
            </button>
          </a>
          <a href="https://leetcode.com/user6228tb/">
            <button>
              <SiLeetcode size={30} className="cursor-pointer me-5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
