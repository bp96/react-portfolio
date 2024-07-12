import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbFileTypeSql } from "react-icons/tb";
import { SiAzuredevops } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";


import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
    transition: {
       duration: duration,
       ease: "linear",
       repeat: Infinity,
       repeatType: "reverse"
    }
}})


function TechStack() {
  const iconStack = [FaHtml5, FaCss3, IoLogoJavascript, FaReact, FaPython, FaWordpress, TbFileTypeSql, SiAzuredevops, IoLogoFirebase];
  const techStackColors=["text-orange-700", "text-cyan-600", "text-yellow-500", "text-cyan-700","text-yellow-500", "text-blue-600", "text-cyan-500", "text-blue-700","text-orange-800"]
  const iconNames =["HTML","CSS","JS","REACT","PYTHON","WORDPRESS","SQL","MS AZURE", "FIREBASE"]
 // Develop this later - turn the above two arrays into an object and then iterate through below 
//   const iconStackObject = {
//     RiReactjsLine: "text-cyan-400",
//     TbBrandNextjs: "text-cyan-400" ,
//     DiRedis: "text-green-500",
//     FaNodeJs: "text-red-700"

//   }

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">
        Tech Stack
      </motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0 }}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        {iconStack.map((Icon, i) => (
          <motion.div 
          variants={iconVariants(i*0.5+2)}
          initial="initial"
          animate="animate"
          key={i} className="rounded-2xl border-4 border-neutral-800 p-4">
            <Icon className={`text-7xl ${techStackColors[i]}` }  />
            <p className="text-center text-xs pt-1">{iconNames[i]}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default TechStack;
