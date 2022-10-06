import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

export const FloatingButtons = (p: { isScrolling: boolean }) => {
  return (
    <div style={{ height: 5000 }}>
      <h1 className="pt-4 text-center">Collapsible Floating Button</h1>
      <Button
        className={`d-flex position-fixed bottom-0 start-50 translate-middle mb-4 shadow ${
          p.isScrolling ? "rounded-circle" : ""
        } `}
      >
        <span className={`buttonTrans ${p.isScrolling ? "transition" : ""}`}>
          Action
        </span>
        +
      </Button>
    </div>
  );
};
