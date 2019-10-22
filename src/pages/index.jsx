import React, { useState } from "react";
import { addUser } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import UserForm from "../components/Form";
import UserTable from "../components/Table"

const MainPage = () => (
  <div>
    <Container>
        <Row>
          <Col><UserForm/></Col>
          <Col><UserTable/></Col>
          {/* <Col></Col> */}
        </Row>
    </Container>
  </div>
);

export default MainPage;
