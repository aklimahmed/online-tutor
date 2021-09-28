import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const BasicInfo = () => {
  return (
    <div>
      <Row>
        <Form>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control style={{backgroundColor: 'white', border: '1px solid grey'}} type="name" placeholder="eg. Mr. Tareq" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone:</Form.Label>
              <Form.Control style={{backgroundColor: 'white', border: '1px solid grey'}} type="tel" placeholder="+8801836765672" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridState">
            <label for="cars">Choose a car:</label>
            <br />
            <select style={{ width: '100%', height: '43px', backgroundColor: 'white', border: '1px solid grey'}} name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>

            </Form.Group>
          </Col>

          <Col></Col>
        </Form>
      </Row>
    </div>
  );
};

export default BasicInfo;
