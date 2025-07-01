import { whatsapp } from "../assets";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "918967671041";
  const message = "Hi, I visited your portfolio!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 cursor-pointer"
      onClick={handleClick}
      initial={{ scale: 1 }}
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0px #00FFFF",
          "0 0 15px #00FFFF",
          "0 0 0px #00FFFF",
        ],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={whatsapp}
        alt="WhatsApp Icon"
        className="w-16 h-16 object-contain"
      />
    </motion.div>
  );
};

export default WhatsAppButton;
