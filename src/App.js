import React, {Component} from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar  from "./components/NavBar";
import CardMovimientos from "./components/CardMovimientos";
import CardRegistro from "./components/CardRegistro";
import FormMovimientos from "./components/FormMovimientos";
import FormRegistro from "./components/FormRegistro";

class App extends Component {
  constructor(){
    super();
    this.state = {
      registro:[]
    }
  }

  handleRegistro = (regis) => {
    this.setState({registro: regis});
    console.log(regis)
}

  render(){
    return (
      <Container fluid>
        <NavBar />
        <br />
        <Row>
          <Col>
            <CardRegistro onSaveApp={this.handleRegistro} formulario={<FormRegistro/>} nombre="Registro"/>
          </Col>
          <Col>
          <CardMovimientos datos={this.state.registro} formulario={<FormMovimientos/>} nombre="Listado de movimientos"/>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default App;
