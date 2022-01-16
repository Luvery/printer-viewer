/* eslint-disable jsx-quotes */
import React from 'react';
import '../styles/printer.css';

function Printer(props) {
  const printerData = props;
  return (
    <div className='listItem'>
      <img src={printerData.data.picture} alt='logo' className='picture' />
      <h1>{printerData.data.brand}</h1>
      <h2 className='model'>{printerData.data.model}</h2>
      <p>{printerData.data.type}</p>
      <h3>
        {printerData.data.price}
        zł
      </h3>
    </div>
  );
}

export default Printer;
