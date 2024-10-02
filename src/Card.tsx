interface CardProps {
    title: string;
    description: string;
    image: string;
    nextStep: () => void;

  }
  
  const Card: React.FC<CardProps> = ({ title, description, image, nextStep }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={nextStep}>Siguiente</button>
      </div>
    );
  };
  
  export default Card;