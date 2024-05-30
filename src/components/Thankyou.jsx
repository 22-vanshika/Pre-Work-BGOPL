import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { runFireworks } from "./utils";
import {
  transition,
  textVariant,
  fadeIn,
  zoomIn,
  slideIn,
  staggerContainer
} from "./transition";

const ThankYou = () => {
  useEffect(() => {
    runFireworks();
  }, []);

  return (
    <motion.div
      className="min-h-screen text-center gap-8 flex flex-col justify-center items-center bg-hero-main bg-cover bg-no-repeat bg-center p-4 md:p-8"
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="text-orange-200 text-4xl md:text-6xl lg:text-9xl"
        variants={textVariant(0.1)}
      >
        Thank You!
      </motion.h1>
      <motion.p
        className="text-orange-300 text-base md:text-lg lg:text-xl"
        variants={fadeIn("up", "spring", 0.3, 1.25)}
      >
        If you have any questions please mail to{" "}
        <a className="email text-orange-200" href="mailto:bharatgold2023@gmail.com">
          bharatgold2023@gmail.com
        </a>
      </motion.p>
      <motion.p
        className="text-orange-300 text-base md:text-lg lg:text-xl w-full md:w-[40em]"
        variants={fadeIn("up", "spring", 0.5, 1.25)}
      >
        Thank you for sharing your information for personalized jewellery
        customization. Your answers help us understand what you like and need,
        so we can suggest jewellery that fits your style and occasion perfectly.
        We appreciate your time and look forward to helping you find the perfect
        piece of jewellery!
      </motion.p>
    </motion.div>
  );
};

export default ThankYou;
