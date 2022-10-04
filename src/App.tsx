import React from "react";
import "./App.css";
import { FloatingButtons } from "./FloatingButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const handleScroll = (e: any) => {
    console.log("hola");
  };

  return (
    <Container
      className="App text-center overflow-auto"
      style={{ height: "100vh", backgroundColor: "lightgray" }}
      onScroll={handleScroll}
    >
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <FloatingButtons />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
