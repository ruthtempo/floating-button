import React, { useRef, useState } from "react";
import { FloatingButtons } from "./FloatingButtons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const timeoutId = useRef<NodeJS.Timeout>();

  const handleScroll = (e: any) => {
    setIsScrolling(true);
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <Container
      className="App text-center overflow-auto"
      style={{ height: "100vh", backgroundColor: "lightgray" }}
      onScroll={handleScroll}
    >
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <FloatingButtons isScrolling={isScrolling} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
