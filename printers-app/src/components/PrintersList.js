/* eslint-disable jsx-quotes */
import React, { Component } from 'react';
import Printer from './Printer';
import { getPrinters } from '../utils/jsonWrapper';
import logo from '../logo2.svg';
import '../styles/printerslist.css';

class PrintersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      printersList: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await this.getAllPrinters();
  }

  async getAllPrinters() {
    const printerss = await getPrinters();
    this.setState({ printersList: printerss });

    if (printerss !== null) {
      this.setState({
        loading: false,
      });
    }
  }

  static renderPrinters(printers) {
    return (
      <div className='wrapper'>
        {printers.printers.map((printer) => (
          <div key={printer.id} className='test'>
            <Printer data={printer} />
          </div>
        ))}
      </div>
    );
  }

  render() {
    const localVariables = this.state;
    const printersDivs = localVariables.loading ? (
      // eslint-disable-next-line jsx-quotes
      <img src={logo} className='App-logo' alt='logo' />
    ) : (
      <div>{PrintersList.renderPrinters(localVariables.printersList)}</div>
    );
    return <div>{printersDivs}</div>;
  }
}
export default PrintersList;
