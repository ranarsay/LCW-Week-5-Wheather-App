import './App.css';
import React, { Component } from 'react'
import { Container, Row, Col, Button, Alert } from "reactstrap"
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';
import Temperature from './Temperature';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDegree: 0
    }
  }
  increaseDegree = () => {
    this.setState({
      currentDegree: this.state.currentDegree + 1
    });

  }
  render() {
    let button;

    if (this.state.currentDegree < 20) {
      button =
        <Button
          onClick={this.increaseDegree}
          color="primary"
        >
          Click me to increase the weather
        </Button>
    }
      else if ((this.state.currentDegree >= 20) && (this.state.currentDegree < 30)) {
      button = <div>
        <Button
          onClick={this.increaseDegree}
          color="warning"
        >
          Click me to increase the weather
        </Button>

        <div>
          <Alert color="info" >
            Hey! Pay attention to the sun.
          </Alert>
        </div>
      </div>
    }
     else if ( this.state.currentDegree >= 30){
      button = <div>
        <Button
          onClick={this.increaseDegree}
          color="danger"
        >
          Click me to increase the weather
        </Button>
        <div>
          <Alert color="info" >
            Hey! Dont forget to wear sunscreen.
          </Alert>
        </div>
      </div>
    }

    return (
      <div>
        <Container className='container'>
          <Row>
            <h1>How's the weather?</h1>
            <h4>Now it's {this.state.currentDegree} degrees out</h4>
          </Row>
          <Row>
            <div>
              {button}
            </div>
          </Row>
          <Row>
            <Temperature info="Temperature measurement in 3 units"></Temperature>
          </Row>
          <Row className='row'>
            <Col xs="4">
              <Celcius
                info="Celcius: "
                currentDegree={this.state.currentDegree}></Celcius>
            </Col>
            <Col xs="4">
              <Fahrenheit
                info="Fahrenheit: "
                currentDegree={(this.state.currentDegree * 1.8) + 32}></Fahrenheit>
            </Col>
            <Col xs="4">
              <Kelvin
                info="Kelvin: "
                currentDegree={this.state.currentDegree + 273.15}></Kelvin>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
