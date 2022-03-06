/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../styles/printer.css';

library.add(fab);

function Printer(props) {
  const printerData = props;
  const color = printerData.data.color ? <p>kolorowa</p> : <p>mono</p>;
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={printerData.data.picture} alt='logo' className='picture' />
        <h1>{printerData.data.brand}</h1>
        <h2 className='model'>{printerData.data.model.toUpperCase()}</h2>
        <p>{printerData.data.type}</p>
        {color}
        <h3>
          {printerData.data.price}
          zł *
        </h3>
        <p>
          <FontAwesomeIcon icon={faGlobe} />
          <a className='app-link' href={printerData.data.website} target='_blank' rel='noopener noreferrer'>
            {' '}
            Strona z drukarką
          </a>
        </p>
      </div>
    </div>
  );
}

export default Printer;
