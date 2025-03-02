import { motion } from "framer-motion"; // For adding motion effects
import Tilt from "react-parallax-tilt"; // For adding tilt effect
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import React, { useState, useEffect } from "react";
import { technologies } from "../constants"; // Ensure you have the correct imports
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full" scale={1.1} transitionSpeed={1500}>
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 4,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[1px] rounded-xl shadow-lg"
      >
        <div className="bg-tertiary rounded-xl py-4 px-6 flex justify-center items-center flex-col min-h-[160px]">
          <img
            src={icon}
            alt="icon"
            className="w-12 h-12 object-contain mb-4"
          />
          <h3 className="text-white text-[18px] font-semibold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Tech = () => {
  // State to track the selected category
  const [activeCategory, setActiveCategory] = useState("frontend");

  // State to store filtered technologies
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  // Filter technologies when the active category changes
  useEffect(() => {
    const filtered = technologies.filter(
      (technology) => technology.category === activeCategory
    );
    setFilteredTechnologies(filtered); // Update state with filtered data
  }, [activeCategory]); // This will run every time activeCategory changes

  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Change category, will trigger useEffect
  };

  return (
    <div className="flex flex-col items-center py-10">
  {/* Tabs for switching between categories */}
  <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText} text-center py-8`}>
      The Technologies I Work With
    </p>
  </motion.div>

  <div className="flex flex-wrap justify-center gap-6 mb-8">
    <button
      onClick={() => handleCategoryChange("frontend")}
      className={`px-6 py-3 text-lg font-semibold rounded-full transition-all ease-in-out duration-300 w-full sm:w-auto ${
        activeCategory === "frontend"
          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-xl"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-lg"
      }`}
    >
      Frontend
    </button>
    <button
      onClick={() => handleCategoryChange("backend")}
      className={`px-6 py-3 text-lg font-semibold rounded-full transition-all ease-in-out duration-300 w-full sm:w-auto ${
        activeCategory === "backend"
          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-xl"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-lg"
      }`}
    >
      Backend
    </button>
    <button
      onClick={() => handleCategoryChange("tools")}
      className={`px-6 py-3 text-lg font-semibold rounded-full transition-all ease-in-out duration-300 w-full sm:w-auto ${
        activeCategory === "tools"
          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-xl"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-lg"
      }`}
    >
      Tools
    </button>
  </div>

  {/* Displaying technologies for the selected category */}
  <div className="flex flex-wrap justify-center gap-6">
    {filteredTechnologies.length > 0 ? (
      filteredTechnologies.map((technology, index) => (
        <ServiceCard
          key={technology.name}
          index={index}
          title={technology.name}
          icon={technology.icon}
        />
      ))
    ) : (
      <p className="text-white text-xl">
        No technologies found for this category.
      </p>
    )}
  </div>
</div>

  );
};

export default SectionWrapper(Tech, "");
