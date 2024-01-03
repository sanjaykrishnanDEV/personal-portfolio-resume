import React from "react";

const Skills = () => {
  const skillset = [
    "HTML",
    "CSS",
    "Javascript",
    "MongoDb",
    "Bootstrap",
    "Tailwind",
    "Nodejs",
    "Express",
    "React",
  ];
  return (
    <div className="mt-40 p-10 px-11 w-[80%] ms-10">
      <p className="text-center text-5xl">🚀🚀Skills🚀🚀</p>
      <div className="flex  flex-wrap justify-center ">
      {skillset.map((item,index)=>{return <Button data={item} key={index}/>})}
      </div>
    </div>
  );
};

export default Skills;

function Button({data}) {
  return (<div className="mt-10 hover:brightness-150 cursor-pointer border p-2 m-5  px-5 h-fit w-fit rounded-xl bg-slate-600">
      <span>{data}</span>
      
    </div>
  );
}
