import React from "react";
import { motion } from "framer-motion";
import { styles } from '../styles'
import { fadeIn,textVariant } from '../utils/motion'
import Tilt from "react-parallax-tilt"; // Tilt effect library
import { clients } from "../constants"; // Ensure you have the correct imports
import { SectionWrapper } from "../hoc";

const ClientCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full" scale={1.1} transitionSpeed={1500}>
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: 1,
          boxShadow: "0px 15px 30px rgba(0, 255, 255, 0.5)",
          border: "2px solid rgba(0, 255, 255, 0.7)",
        }}
        className="w-full bg-gradient-to-r from-[#2a2a2a] via-[#333333] to-[#4e4e4e] p-[1px] rounded-xl shadow-2xl"
      >
        <div className="bg-secondary rounded-xl py-4 px-6 flex justify-center items-center flex-col min-h-[160px] relative overflow-hidden">
          <motion.img
            src={icon}
            alt="icon"
            className="w-16 h-16 object-contain mb-4"
            whileHover={{
              scale: 1.2,
              rotate: 10,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.h3
            className="text-white text-[18px] font-semibold text-center"
            whileHover={{
              color: "#00FFFF",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-cyan-500 hover:opacity-60 transition-all duration-300" />
        </div>
      </motion.div>
    </Tilt>
  );
};

const Client = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center py-8`}>
          My Trusted Clients
        </p>
      </motion.div>

      {/* Grid layout for clients */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            index={index}
            title={client.title}
            icon={client.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Client, "");
