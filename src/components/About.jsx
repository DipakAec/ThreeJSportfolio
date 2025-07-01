import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import { useState, useEffect } from 'react';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon, value }) => {
  // State to hold the animated value
  const [animatedValue, setAnimatedValue] = useState(0);

  // Function to animate the number value
  const animateValue = () => {
    const targetValue = parseInt(value.replace(/\D/g, "")); // Strip non-numeric characters
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue += Math.ceil(targetValue / 100); // Increase value incrementally
        setAnimatedValue(currentValue);
      } else {
        clearInterval(interval);
        setAnimatedValue(targetValue);
      }
    }, 20); // Adjust speed by changing interval duration
  };

  // Trigger the animation on mount
  useEffect(() => {
    animateValue();
  }, [value]);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { delay: 0.3 * index, duration: 0.75 } },
        }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 200,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* Optional Icon */}
          {icon && (
            <img
              src={icon}
              alt={`${title} icon`}
              className="w-16 h-16 object-contain mb-4"
            />
          )}

          {/* Title */}
          <h3 className="text-white text-[22px] font-bold text-center">{title}</h3>

          {/* Animated Value */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4"
          >
            <p className="text-2xl font-semibold text-white text-center">
              {animatedValue} {value.replace(/[0-9]/g, "")} {/* Adding unit back like + */}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Tilt>
  );
};



const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overviews</h2>
    </motion.div>
    <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className='mt-4 text-secondary text-[18px] max-w-6xl leading-[30px]'
>
  Hi, I'm Dipak Kumar Paul, a Software/Web Developer based in Kolkata, India. Currently, I working at <a class='font-semibold text-white-100' href="https://www.sustechengineering.au/">Sustech Engineering Pvt Ltd</a>, where I contribute to dynamic web applications using React.js for frontend development and Laravel (PHP) for backend services, collaborating through GitLab and CI/CD pipelines.
  <br /> <br /> Previously, I worked at <a class='font-semibold text-white-100' href="https://smsolutions.in/">SM Solutions</a> where I leveraged my skills in PHP framework Laravel, MySQL, JavaScript, JQuery, HTML, CSS, and Bootstrap to craft high-quality web applications and websites.
  <br /> <br /> I also worked at <a class='font-semibold text-white-100' href="https://www.albatrossoft.com/">Albatross Software Services Pvt. Ltd.</a>, where I utilised my skills in PHP framework Laravel, CodeIgniter, MySQL, PostgreSQL, JavaScript, JQuery, HTML, CSS, and Bootstrap to create top-notch web applications.
  <br /> <br /> Earlier in my career, I was part of <a class='font-semibold text-white-100' href="https://mindbrewstudio.com/">MindBrew Studio</a>, where I used my expertise in HTML, CSS, JavaScript, React JS, PHP, MySQL, and WordPress to develop high-quality websites and web applications.
  <br /> <br /> Throughout my journey, I've acquired valuable experience developing responsive and user-friendly websites that provide an exceptional user experience. I'm passionate about staying up-to-date with the latest web development trends and technologies, enabling me to incorporate innovative solutions into my work.
</motion.p>

   <motion.div>
      {/* This container holds the flexbox layout for the service cards */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {/* Loop through the services array and pass each service's data to the ServiceCard */}
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}  // Use the `title` as the unique key
            index={index}
            title={service.title}
            icon={service.icon}
            value={service.value}
          />
        ))}
      </div>
    </motion.div>
    </>
  )
}

export default SectionWrapper(About,"about");