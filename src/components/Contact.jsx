import React from 'react'
import { CONTACT } from "../constants";
import {motion} from "framer-motion"
import ContactIcons from './ContactIcons';

function Contact() {
  return (
    <div className='border-neutral-900 pb-20'>
    <motion.h2 
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}} 
    className='my-10 text-center text-4xl'>Contact Me</motion.h2>
    <motion.div whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className='text-center tracking-tighter'>
        <ContactIcons />
    </motion.div>
    </div>
    
  )
}

export default Contact