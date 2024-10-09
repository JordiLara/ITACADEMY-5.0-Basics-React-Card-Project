import React from "react";
import { motion } from "framer-motion";

interface IndicatorProps {

  totalSteps: number;
  currentStep: number;
  goToStep: (step: number) => void;
};

const Indicator: React.FunctionComponent<IndicatorProps> = ({
  totalSteps,
  currentStep,
  goToStep,
}) => {
  return (
    <div className = "flex justify-left mt-6 mb-6">

      {Array.from({ length: totalSteps }).map(
        (_,stepNum // Passing _ as a parameter to React that this data its empty and there is no need to be processed
        ) => (
        <motion.div //adds animation data from FramerMotion
          key = {stepNum}
          onClick = {() => goToStep(stepNum)}
          className = {`w-3 h-3 ml-3 transition-all rounded-full`}
            animate = {{
              backgroundColor: stepNum === currentStep ? "#000000" : "#d1d1d1", 
              width: stepNum === currentStep ? 24 : 12, 
            }}
            transition = {{ duration: 0.3 }}
            style = {{
              backgroundColor: stepNum === currentStep ? "#000000" : "#d1d1d1", 
              width: stepNum === currentStep ? 24 : 12,
            }}
        /> 
      ))}
    </div>
  );
};

export default Indicator;
