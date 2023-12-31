import React from "react";
import "./App.css";
import { Col, Row } from "react-bootstrap";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="Container app-container" >
      <Row>
        <Col>
          <h1>This is My App React </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Login data-testid="child" />
        </Col>
      </Row>
    </div>
  );
};

export default App;
