import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { github } from '../assets'
import { website } from "../assets"
import { freelances } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const JobCard = ({ index, name, description, tags, image, source_code_link, website_link, role }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <div
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#00f0ff] relative h-[600px]" // Fixed height for the card
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
            <div
              onClick={() => window.open(website_link, "_blank")}
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={website}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[15px]">{description}</p>
        </div>

        <div>
          <h5 className="text-white font-bold text-[15px] mt-4">Work Role: <span className="text-white font-semibold text-[15px]">{role}</span></h5>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[15px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Freelance = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Freelance Works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Works
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18px] max-w-6xl leading-[30px] text-justify"
        >
          Here are examples of my freelance projects that highlight my skills and experience.
          Each project is briefly described with links to code repositories and live demos,
          showcasing my problem-solving abilities, proficiency with various technologies,
          and project management skills.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {freelances.map((freelance, index) => (
          <JobCard
            key={`freelances-${index}`}
            index={index}
            {...freelance}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Freelance, "freelance");
