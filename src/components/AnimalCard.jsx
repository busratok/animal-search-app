import { useState } from "react";
import Card from "react-bootstrap/Card";

const AnimalCard = ({ animal }) => {
  const { name, image, type, habitat, diet, fact } = animal;
  const [showImage, setShowImage] = useState(true);
  console.log(name, image);
  const handleClick = () => {
    setShowImage(!showImage);
  };
  return (
    <Card className="h-100 card border border-0" onClick={handleClick}>
      <Card.Body>
        {showImage ? (
          <Card.Img src={image} className="h-100 card-image" />
        ) : (
          <ul className="d-flex flex-column h-100 gap-5 justify-content-center text-white">
            <li>
              <Card.Subtitle>Type: </Card.Subtitle>
              <Card.Text> {type}</Card.Text>
            </li>
            <li>
              <Card.Subtitle>Habitat: </Card.Subtitle>
              <Card.Text>{habitat}</Card.Text>
            </li>
            <li>
              <Card.Subtitle>Diet: </Card.Subtitle>
              <Card.Text>{diet}</Card.Text>
            </li>
            <li>
              <Card.Subtitle>Fact: </Card.Subtitle>
              <Card.Text>{fact}</Card.Text>
            </li>
          </ul>
        )}
      </Card.Body>
      <Card.Footer className="text-center text-white">
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default AnimalCard;
