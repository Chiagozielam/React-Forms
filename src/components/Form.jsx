import React, { useState } from "react";
import { addUser } from "../actions/userActions";
import { useDispatch } from "react-redux";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import {useSelector} from "react-redux"

const UserForm = () => {
  const dispatchRef = useDispatch();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    age: "",
    hobby: ""
  });
  const formSubmit = e => {
    e.preventDefault();
    addUser(inputs, dispatchRef);
  };

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <div>
      <Container>
            <div className="form shadow">
              <h3>USER FORM</h3>
              <Form>
                <Form.Group controlId="">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Daniel"
                    name="firstName"
                    value={inputs.firstName}
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Don"
                    name="lastName"
                    value={inputs.lastName}
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthday"
                    value={inputs.birthday}
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Don"
                    name="age"
                    value={inputs.age}
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Form.Group controlId="">
                  <Form.Label>Hobby</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="dancing, reading , gaming, etc.."
                    name="hobby"
                    value={inputs.hobby}
                    onChange={onChangeInput}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={formSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
      </Container>
    </div>
  );
};

export default UserForm;
