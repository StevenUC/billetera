import React, { Component } from "react";
import { Button, Col, Form, FormGroup } from "react-bootstrap";

export default class FormRegistro extends Component {
  constructor(props){
    super(props)
    this.state = {
      registro: [],
      tipoMovimiento: "Ingreso",
      nombre: "",
      cantidad: ""
    };
  }

  handleAddFields = (e) => {
    e.preventDefault();
    const registro = [...this.state.registro];
    registro.push({ tipoMovimiento: this.state.tipoMovimiento, nombre: this.state.nombre, cantidad: this.state.cantidad});
    this.setState({
      registro
    })
    this.props.onSave(registro);
  };


  onChange = (e) => {
    e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <Form.Row>
            <Col>
              <Form.Label ClassName='col-sm-4 col-form-label'>
                Tipo de movimiento
              </Form.Label>
            </Col>
            <Col>
              <Form.Control as='select' name="tipoMovimiento" id="tipoMovimiento" onChange={this.onChange}>
                <option value="Ingreso">Ingreso</option>
                <option Value="Gasto">Gasto</option>
              </Form.Control>
            </Col>
          </Form.Row>
        </FormGroup>
        <FormGroup>
          <Form.Row>
            <Col>
              <Form.Label ClassName='col-sm-4 col-form-label'>
                Nombre
              </Form.Label>
            </Col>
            <Col>
              <Form.Control type='text' value={this.state.nombre} onChange={this.onChange} name="nombre" id="nombre"/>
            </Col>
          </Form.Row>
        </FormGroup>
        <FormGroup>
          <Form.Row>
            <Col>
              <Form.Label ClassName='col-sm-4 col-form-label'>
                Cantidad
              </Form.Label>
            </Col>
            <Col>
              <Form.Control type='text' value={this.state.cantidad} onChange={this.onChange} name="cantidad" id="cantidad"/>
            </Col>
          </Form.Row>
        </FormGroup>
        <Form.Row>
          <Col>
            <Button variant='light' type='submit'>
              Cancelar
            </Button>
          </Col>
          <Col>
            <Button variant='secondary' type='submit' onClick={this.handleAddFields}>
              Agregar movimiento
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
