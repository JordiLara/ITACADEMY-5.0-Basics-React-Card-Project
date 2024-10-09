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
      {/* Generamos los círculos con .map y length para que sepa cuantos circulos hay o eso he entendido */}

      {Array.from({ length: totalSteps }).map(
        (_,stepNum // utilizar _ en la función le dice a React que ahí no hay un dato que procesar
        ) => (
        <motion.div //añade datos de animación de FramerMotion
          key = {stepNum}
          onClick = {() => goToStep(stepNum)}
          className = {`w-3 h-3 ml-3 transition-all rounded-full`}
            animate = {{
              backgroundColor: stepNum === currentStep ? "#000000" : "#d1d1d1", 
              width: stepNum === currentStep ? 24 : 12, //cambian el tamaño para la animación
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
