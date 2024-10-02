interface CardProps {
    title: string;
    description: string;
    nextStep: () => void;
  }
  
  const Card: React.FC<CardProps> = ({ title, description, nextStep }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={nextStep}>Siguiente</button>
      </div>
    );
  };
  
  export default Card;