/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
import React from 'react';
import './App.css';
import PrintersList from './components/PrintersList';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <h3>Na liście znajdują się tylko urządzenia wielofunkcyjne, które posiadają moduł wifi.</h3>
        <p>Może warto rozważyć laserowe drukarki?</p>
        <span>Przewaga taka, że nie trzeba się martwić, że wyschnie tusz po długiej przerwie od drukowania.</span>
        <p>Pytanie, czy druk w kolorze to must have? Czy można odpuścić, wtedy schodzimy dużo z ceny.</p>
        <PrintersList />
        <p>* - ceny przybliżone</p>
        <p>Disclaimer: </p>
        <p>Patrzyłem równiez na epsony, mają podobne ceny, ale brothery mają lepszą głowicę drukującą (podobno 😂) </p>
      </div>
    </div>
  );
}

export default App;
