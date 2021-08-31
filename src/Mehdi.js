import React from 'react';
import TableMe from './TableMe'
function Mehdi(props) {

  return (
    <div>
      <ul>
        {props.data.map(x => <li>{x}</li>)}
      </ul>
      <TableMe />
    </div>
  );
}

export default Mehdi;
