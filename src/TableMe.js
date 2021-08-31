import React from 'react';
import { Table } from 'reactstrap';
import { mydata } from './data'

const TableMe = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {mydata.filter(y => y.name === 'Ali').map(x =>
          <tr>
            <th scope="row">1</th>
            <td>{x.name}</td>
            <td>{x.last}</td>
            <td>{x.username}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default TableMe;