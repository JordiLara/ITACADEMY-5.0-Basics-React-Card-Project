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
}

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
}) => {
  return (
    <div
      className = {`w-full max-w-xs md:max-w-sm h-auto md:h-[550px] rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between relative`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Imagen superior */}

    <div className = "w-full h-1/2 md:h-2/3 flex justify-center items-center">
      <img src = {image} alt = {alt} className = "w-full h-full object-contain p-4" />
    </div>

      {/* Sección de contenido */}

    <div className = "bg-white flex-grow p-6">
      <h2 className = "font-bold text-xl mb-4 text-left">{title}</h2>
      <p className = "text-left leading-relaxed">{description}</p>
    </div>

      {/* Botón adelante */}

      {/* Botón retroceder (si no se cumple la condición de que es el primer paso) */}

    {!firstStep && (
      <button
        onClick = {prevStep}
        className = "absolute bottom-4 left-4 md:bottom-6 md:left-6 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full"
      >
        🡐
      </button>
    )}

      {/* Boton atrás */}

      {/* Botón avanzar (si no se cumple la condición de el último paso) */}

    {!lastStep && (
      <button
        onClick={nextStep}
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 bg-black text-white flex items-center justify-center rounded-full"
      >
        ➔
      </button>
    )}
    </div>
  );
};

export default Card;
