import React, { Component } from "react";
import { Card } from "react-bootstrap";
import  FormMovimientos  from "./FormMovimientos";

export default class CardMovimientos extends Component {
  render() {
    return (
      <Card bg='dark' text='white' className='mb-2'>
        <Card.Header>Lista de movimientos</Card.Header>
        <Card.Body>
          <Card.Text>
            <FormMovimientos datos={this.props.datos}/>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
