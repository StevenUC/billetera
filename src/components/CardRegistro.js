import React, {Component} from "react";
import { Card } from "react-bootstrap";
import FormRegistro from "./FormRegistro";

export default class CardRegistro extends Component {
    constructor(){
        super();
        this.state = {
            registro:[]
        }
    }

    handleRegistro = (regis) => {
        this.setState({registro: regis});
        console.log(regis)
        this.handleRegistroApp(regis);
    }

    handleRegistroApp = (regis) => {
        this.props.onSaveApp(regis);
      };

    render(){
        return (
          <Card
            bg='dark'
            text='white'
            className='mb-2'>
            <Card.Header>Registro</Card.Header>
            <Card.Body>
              <Card.Text>
                <FormRegistro onSave={this.handleRegistro}/>
              </Card.Text>
            </Card.Body>
          </Card>
        );
    }
};
