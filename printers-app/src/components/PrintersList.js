import React, { Component } from 'react';
import { getPrinters } from '../utils/jsonWrapper';
// import logo from '../logo.svg';

class Printer extends Component {
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
      <div>
        {printers.printers.map((printer) => (
          <div key={printer.id}>{printer.model}</div>
        ))}
      </div>
    );
  }

  render() {
    const localVariables = this.state;
    const printersDivs = localVariables.loading ? (
      // eslint-disable-next-line jsx-quotes
      //   <img src={logo} className='App-logo' alt='logo' />
      <p>test</p>
    ) : (
      <div>{Printer.renderPrinters(localVariables.printersList)}</div>
    );
    return <div>{printersDivs}</div>;
  }
}
export default Printer;
