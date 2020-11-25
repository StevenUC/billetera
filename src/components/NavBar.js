import React, { Component } from "react";
import { Form, FormControl, Navbar } from "react-bootstrap";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      saldoInicial: "",
      saldoFinal: "",
      ingresos: "",
      gastos: ""
    };
  }

  onChange = (e) => {
    e.preventDefault();
    if (e.target.name == "saldoInicial" && this.state.ingresos == "" && this.state.gastos == "") {
        this.setState({saldoFinal: e.target.value, saldoInicial: e.target.value})
    } else {
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>Billetera</Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Form inline>
            <FormControl
            name='saldoInicial'
            id='saldoInicial'
              type='number'
              placeholder='Saldo inicial'
              className='mr-sm-2'
              onChange={this.onChange}
              value={this.state.saldoInicial}
            />
            <FormControl
            name='saldoFinal'
            id='saldoFinal'
              type='number'
              placeholder='Saldo final'
              className='mr-sm-2'
              value={this.state.saldoFinal}
              readOnly
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
