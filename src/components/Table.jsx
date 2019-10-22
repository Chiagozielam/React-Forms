import React from "react";
import { useSelector } from "react-redux";
import {Table} from "react-bootstrap"
const UserTable = () => {
  const userState = useSelector(state => state.user.users);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Age</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {userState.map( ({firstName, lastName, birthday, age, hobby}) => (
            <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{birthday}</td>
            <td>{age}</td>
            <td>{hobby}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
