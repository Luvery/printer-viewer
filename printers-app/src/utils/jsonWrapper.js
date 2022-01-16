/* eslint-disable linebreak-style */
import axios from 'axios';

const PRINTERS_URL = 'https://luvery.github.io/printer-viewer/printers.json';

export const getPrinters = async () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get(PRINTERS_URL)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      return null;
    });
export const saysomething = () => 'ss';
