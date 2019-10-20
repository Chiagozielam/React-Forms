import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

class MainPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    birthday: "",
    age: "",
    hobby: "",
    user: []
  };

  formSubmit = e => {
    e.preventDefault();
    const userDetails = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthday: this.state.birthday,
      age: this.state.age,
      hobby: this.state.hobby
    };
    this.setState({ user: [...this.state.user, userDetails] });
    console.log(this.state.user);
  };

  onChangeFirstName = e => {
    this.setState({ firstName: e.target.value });
  };
  onChangeLastName = e => {
    this.setState({ lastName: e.target.value });
  };
  onChangeBirthday = e => {
    this.setState({ birthday: e.target.value });
  };
  onChangeAge = e => {
    this.setState({ age: e.target.value });
  };
  onChangeHobby = e => {
    this.setState({ hobby: e.target.value });
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div className="form shadow">
                <h3>USER FORM</h3>
                <Form>
                  <Form.Group controlId="">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Daniel"
                      value={this.state.firstName}
                      onChange={this.onChangeFirstName}
                    />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Don"
                      value={this.state.lastName}
                      onChange={this.onChangeLastName}
                    />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      type="date"
                      value={this.state.birthday}
                      onChange={this.onChangeBirthday}
                    />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Don"
                      value={this.state.age}
                      onChange={this.onChangeAge}
                    />
                  </Form.Group>
                  <Form.Group controlId="">
                    <Form.Label>Hobby</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="dancing, reading , gaming, etc.."
                      value={this.state.hobby}
                      onChange={this.onChangeHobby}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.formSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col>
              <div>
                {this.state.user ? (
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Brithday</th>
                        <th>Age</th>
                        <th>Hobby</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.user.map(
                        ({ firstName, lastName, birthday, age, hobby }) => (
                          <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{birthday}</td>
                            <td>{age}</td>
                            <td>{hobby}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                ) : (
                  <div>Empty</div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MainPage;
