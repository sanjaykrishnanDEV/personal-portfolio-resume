import React from "react";
import resume from "./assets/resume.pdf.pdf";
const Navbar = () => {
  return (
    <div className=" font-mono text-2xl w-screen flex justify-between p-4 ">
      <div className="w-1/2">Hello👋</div>
      <div className="w-1/2 ">
        <ul className="flex justify-end">
          <a href={resume}>
            <li className="me-6 hover:text-red-500 cursor-pointer">Resume</li>
          </a>
          <a href="mailto:er.sanjaykrishnan@gmail.com">
            <li className="me-4 hover:text-red-500 cursor-pointer">Mail me</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
