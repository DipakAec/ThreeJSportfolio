import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
         options={{
          max:45,
          scale:1,
          speed:200
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="icon" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[22px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overviews</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[18px] max-w-6xl leading-[30px]'
    >
    Hi, I'm Dipak Kumar Paul, a Software/Web Developer based in Kolkata, India. Currently, I work at <a class='font-semibold text-white-100' href="https://smsolutions.in/">SM Solutions</a> where I leverage my skills in PHP framework Laravel, MySQL, JavaScript,JQuery, HTML, CSS and Bootstrap to craft high-quality web applications and websites.
<br /> <br /> Previously, I worked at <a class='font-semibold text-white-100' href="https://www.albatrossoft.com/">Albatross Software Services Pvt. Ltd.</a>, where I utilised my skills in PHP framework Laravel, CodeIgniter, MySQL, PostgreSQL, JavaScript,JQuery, HTML, CSS and Bootstrap to create top-notch web applications.
<br /> <br /> I also worked at <a class='font-semibold text-white-100' href="https://mindbrewstudio.com/">MindBrew Studio</a>, where I used my expertise in HTML, CSS, JavaScript, React JS, PHP, MySQL, and WordPress to develop high-quality websites and web applications.
<br /> <br /> Throughout my career, I've acquired valuable experience developing responsive and user-friendly websites that provide an exceptional user experience. I'm passionate about staying up-to-date with the latest web development trends and technologies, enabling me to incorporate innovative solutions into my work.

   </motion.p>
    <motion.div
        // whileTap={{ scale: 0, rotateY: -90 ,borderRadius:"50%" }}
      >
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={services.title} index={index} {...service}/>
      ))}
    </div>
    </motion.div>
    </>
  )
}

export default SectionWrapper(About,"about");