/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/printer.css';

function Printer(props) {
  const printerData = props;
  return (
    <div className='listItem'>
      <h1>{printerData.data.brand}</h1>
      <h2>{printerData.data.model}</h2>
      <p>{printerData.data.type}</p>
      <h3>
        {printerData.data.price}
        zł
      </h3>
    </div>
  );
}

export default Printer;
