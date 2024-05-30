import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slideshow from "./Slideshow";
import { slideIn, fadeIn, zoomIn, transition } from "./transition"; // Adjust the import path as needed
import Step from "./Step";

const stepsContent = [
  {
    label: "1. What is the occasion for this jewellery?",
    note: "This helps us tailor our recommendations to match the significance and style suitable for the event.",
    inputType: "select",
    options: ["Engagement", "Anniversary", "Birthday", "Daily-wear", "Other"],
  },
  {
    label: "2. Is this a gift or a personal purchase?",
    note: "Understanding if the jewellery is for yourself or someone else helps us refine our suggestions based on typical gift preferences.",
    inputType: "select",
    options: ["Gift", "Personal Purchase"],
  },
  {
    label: "3. Please select the gender.",
    note: "This allows us to recommend designs and styles that align with the typical preferences of the chosen gender.",
    inputType: "select",
    options: ["Male", "Female", "Other"],
  },
  {
    label: "4. What is the age group of the wearer?",
    note: "Age can significantly influence jewellery style preferences, so this helps us make more suitable recommendations.",
    inputType: "radio",
    options: ["<18", "18-25", "26-35", "36-50", "51+"],
  },
  {
    label:
      "5. Do you have any religious considerations for this jewellery?",
    note: "Some religious beliefs might influence jewellery design choices, like specific symbols or restrictions.",
    inputType: "select",
    options: ["Prefer not to disclose", "Christianity", "Islam", "Hinduism","None of these"],
  },
  {
    label: "6. What type of jewellery are you interested in?",
    note: "This helps us narrow down the product category to provide more relevant recommendations.",
    inputType: "select",
    options: ["Rings", "Necklaces", "Pendants", "Bracelets", "Earrings"],
  },
  {
    label: "7. What is your budget for this jewellery?",
    note: "Knowing your budget helps us suggest options that fit within your financial constraints.",
    inputType: "radio",
    options: ["<$50", "$50-$100", "$100-$200", "$200+"],
  },
  {
    label: "8. Would you like to match your jewellery with an outfit?",
    note: "Uploading an image of your outfit can help us recommend jewellery that complements your attire perfectly.",
    inputType: "radio",
    options: ["Yes", "No"],
    additionalInput: "file",
  },
];

const QuizForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [customInputFilled, setCustomInputFilled] = useState(false);
  const [direction, setDirection] = useState("left");

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setDirection("left");
      if (currentStep < stepsContent.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        navigate("/thankyou");
      }
    }
  };

  const handlePrev = () => {
    setDirection("right");
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "customOccasion") {
      setCustomInputFilled(!!value); // Update custom input filled state
    }

    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      outfitImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  const validateStep = (stepIndex) => {
    const step = stepsContent[stepIndex];
    const value = formData[step.label];

    if (!value) {
      setErrors({
        ...errors,
        [step.label]: "*This field is required",
      });
      return false;
    }

    if (
      step.label === "1. What is the occasion for this jewellery?" &&
      value === "Other" &&
      !customInputFilled
    ) {
      setErrors({
        ...errors,
        customOccasion: "*Please fill in the custom occasion",
      });
      return false;
    }

    return true;
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-quiz">
      <div className="1stDiv md:w-1/2 flex flex-col items-center  min-h-screen relative">
        <motion.div
          key={currentStep}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={slideIn(direction, "tween", 0, 0.5)} // Faster slide in for steps
          className="puchu w-3/4  my-10 
          text-orange-300 mx-5 hover:transition durtion-200 
          "
        >
          {stepsContent.map(
            (step, index) =>
              index === currentStep && (
                <div key={index} className="p-4">
                  <Step
                    step={step}
                    isActive={index === currentStep}
                    formData={formData}
                    handleChange={handleChange}
                    handleFileChange={handleFileChange}
                  />
                  {errors[stepsContent[currentStep].label] && (
                    <div className="text-orange-100   text-center text-sm sm:text-base md:text-lg lg:text-xl ">
                      {errors[stepsContent[currentStep].label]}
                    </div>
                  )}
                  {currentStep === 0 && errors.customOccasion && (
                    <div className="text-orange-100 text-sm sm:text-base md:text-lg lg:text-xl text-center">
                      {errors.customOccasion}
                    </div>
                  )}
                </div>
              )
          )}
        </motion.div>
        <div className="absolute bottom-5 mt-5 w-full flex justify-between px-5">
          {currentStep > 0 && (
            <motion.button
              initial="hidden"
              animate="show"
              variants={fadeIn("left", "spring", 0.1, 0.4)} // Fade in for buttons
              type="button"
              onClick={handlePrev}
              className="
              text-orange-300 
              px-3 py-2 text-base 
              md:px-5 md:py-3 md:text-2xl 
              rounded-3xl 
              hover:text-amber-950 
              hover:border-amber-950 
              shadow-sm 
              hover:bg-orange-200 
              border-2 
              shadow-orange-200 
              border-orange-200 
              transition 
              duration-200
            "
            >
              Back
            </motion.button>
          )}
          <motion.button
            initial="hidden"
            animate="show"
            variants={fadeIn("right", "spring", 0.1, 0.4)} // Fade in for buttons
            type="button"
            onClick={handleNext}
            className="
            text-orange-300 
            px-3 py-2 text-base 
            md:px-5 md:py-3 md:text-2xl 
            rounded-3xl 
            hover:text-amber-950 
            hover:border-amber-950 
            shadow-sm 
            hover:bg-orange-200 
            border-2 
            shadow-orange-200 
            border-orange-200 
            transition 
            duration-200
          "
          >
            {currentStep < stepsContent.length - 1 ? "Next" : "Submit"}
          </motion.button>
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={slideIn("right", "tween", 0, 0.5)}
        className="2ndDiv rounded-l-[40em] rounded-r-md  relative w-full h-full overflow-hidden md:w-1/2 min-h-screen md:block "
      >
        <Slideshow />
      </motion.div>
    </div>
  );
};

export default QuizForm;
