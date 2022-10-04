import React from "react";
import { Button } from "react-bootstrap";

export const FloatingButtons = () => {
  return (
    <div style={{ height: 5000 }} className="position-relative">
      <h3 className="pt-4">Collapsible Floating Button</h3>
      <div className="d-flex align-items-center justify-content-end w-25">
        <Button className="position position-fixed bottom-0 end-0 m-4 shadow ">
          no scroll
        </Button>
      </div>
      <div className="d-flex align-items-center justify-content-end">
        <Button className="rounded-circle position-fixed bottom-0 end-0  m-4 shadow ">
          +
        </Button>
      </div>
    </div>
  );
};
