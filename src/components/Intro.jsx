import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition, textVariant, fadeIn, zoomIn, slideIn, staggerContainer } from "./transition";

const Intro = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <motion.section
      className="min-h-screen flex justify-center items-center bg-hero-main bg-cover bg-no-repeat bg-center"
      variants={staggerContainer(0.1, 0.5)}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="text-center flex flex-col justify-center items-center z-10 m-10"
        variants={fadeIn("up", "spring", 0.2, 0.75)}
      >
        <motion.h1
          className="text-5xl tracking-wider sm:text-6xl md:text-8xl lg:text-9xl text-orange-100 flex flex-col"
          variants={textVariant(0.05)}
        >
          Crafting
          <motion.span
            className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl mt-4"
            variants={textVariant(0.1)}
          >
            Your Perfect Pieces
          </motion.span>
        </motion.h1>
        <motion.p
          className="sm:text-xl md:text-2xl text-orange-300 w-[20em] mt-8"
          variants={textVariant(0.2)}
        >
          We collect details about your preferences, style, and personality to
          create a unique piece of jewelry that tells your personal story.
        </motion.p>
        <motion.button
          onClick={handleStartQuiz}
          className="
          mt-8 
          text-orange-300 
          px-3 py-2 text-lg 
          md:px-5 md:py-3 md:text-2xl 
          rounded-3xl 
          hover:text-amber-950 
          hover:border-amber-950 
          shadow-sm 
          hover:bg-orange-100 
          border-2 
          shadow-orange-100 
          border-orange-200 
          transition 
          duration-200
        "
        
          variants={zoomIn(0.3, 0.3)}
        >
          Get Started -{">"}
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Intro;
