import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import data from "../helpers/data";
import AnimalCard from "./AnimalCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Form.Control
        placeholder="Search Animal..."
        type="search"
        className="w-50 mx-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="mt-5">
        <Row className="g-3 justify-content-center">
          {data
            .filter((animal) =>
              animal.name
                .toLocaleLowerCase()
                .includes(search.trim().toLocaleLowerCase())
            )
            .map((animal, i) => (
              <Col md={6} lg={4} xl={3} key={i} className="card-col">
                <AnimalCard animal={animal} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContainer;
