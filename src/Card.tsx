import React from "react";
import { motion } from "framer-motion";
import Indicator from "./components/Indicator";

interface CardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  bgColor: string;
  nextStep: () => void;
  prevStep: () => void;
  firstStep: boolean;
  lastStep: boolean;
  totalSteps: number;
  currentStep: number;
  direction: "next" | "prev";
  goToStep: (step: number) => void;
}
  // those commands works with the direction of the animation

const variants = {
  enter: (direction: "next" | "prev") => ({
    x: direction === "next" ? 300 : -300, 
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? -300 : 300, 
    opacity: 0,
  }),
};

const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  image,
  alt,
  bgColor,
  nextStep,
  prevStep,
  firstStep,
  lastStep,
  totalSteps,
  currentStep,
  direction,
  goToStep,
}) => {
  return ( 
    <motion.div
      className = "w-full max-w-xs md:max-w-sm h-auto md:h-[550px] rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between relative"

      // add options to the cards animation

      initial = "enter"
      animate = "center"
      exit = "exit"
      variants = {variants}
      custom = {direction}
      transition = {{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Top image */}

      <div className = {`w-full h-1/2 md:h-2/3 flex justify-center items-center `}>
        <img
          className = {`w-full h-full object-contain p-4`} 
          src = {image}
          alt = {alt}
          style = {{ backgroundColor: bgColor }}
        />
      </div>

      {/* Content section */}

      <div className = "bg-white flex-grow p-6">
        <h2 className = "font-bold text-xl mb-4 text-left">{title}</h2>
        <p className = "text-left leading-relaxed">{description}</p>
      </div>

      {/* Indicator/Step counter */}

      <Indicator totalSteps = {totalSteps} currentStep = {currentStep} goToStep = {goToStep} />

      {/* Forward button */}

      {/* Backwards button (if the first step condition its false) */}

      {!firstStep && (
        <button
          onClick = {prevStep}
          className = "absolute bottom-4 right-20 md:bottom-6 md:right-70 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full"
        >
          ←
        </button>
      )}

      {/* Backwards button */}

      {/* Forward button (if the last step condition its false) */}

      {!lastStep && (
        <button
          onClick = {nextStep}
          className = "absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full"
        >
          →
        </button>
      )}
    </motion.div>
  );
};

export default Card;
