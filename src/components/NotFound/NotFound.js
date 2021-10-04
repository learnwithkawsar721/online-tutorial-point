import React from "react";
import { Container } from "react-bootstrap";
const style404 = {
  margin: "240px 0px",
};
const NotFound = () => {
  return (
    <Container>
      <div className="text-center" style={style404}>
        <h3>Page Not Found </h3>
        <h1>404</h1>
      </div>
    </Container>
  );
};

export default NotFound;
