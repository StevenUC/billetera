import React, { Component} from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "popper.js/dist/popper.min.js";

export default class TableMovimientos extends Component {
  constructor() {
    super();
    this.state = {
      registro: [{"0":0,"1":0,"2":0,"3":0}],
      show: false,
      borrar: 0
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
    console.log(this.state.registro)
  }

  handleShow(numero) {
    this.setState({ show: true, borrar: numero });
    //console.log(this.state.borrar)
    this.setState({
      registro: this.props.datos
    });
  }


  handleRemoveFields() {
    
    const registro = [...this.state.registro];
    registro.splice(this.state.borrar, 1);
    this.setState({
      registro
    });
  }

  render() {
    const listItems = this.props.datos;
   
    return (
      <>
        <Table borderless variant='dark'>
          <thead>
            <tr>
              <th>Eliminar</th>
              <th>Accion</th>
              <th>Nombre</th>
              <th>Dinero</th>
            </tr>
          </thead>
          <tbody>{listItems.map((registro, i) => (
      <tr key={i}>
        <td>
          <Button variant='danger' onClick={() => this.handleShow(i)}>
            X
          </Button>
        </td>
        <td>Editar</td>
        <th scope='row'>{registro.nombre}</th>
        <td>{registro.cantidad}</td>
      </tr>
    ))}</tbody>
        </Table>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={() => {this.handleRemoveFields()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
