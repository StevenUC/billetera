import React, { Component } from "react";
import { Col, Form, FormGroup } from "react-bootstrap";
import TableMovimientos from "./TableMovimientos";

export default class FormMovimientos extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <FormGroup>
              <Col>
                <Form.Control type='search' placeholder='Buscar' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Form.Check inline label='Todos' type='radio' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Form.Check inline label='Ingreso' type='radio' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col>
                <Form.Check inline label='Gasto' type='radio' />
              </Col>
            </FormGroup>
          </Form.Row>
        </Form>
        <TableMovimientos datos={this.props.datos}/>
      </div>
    );
  }
}
