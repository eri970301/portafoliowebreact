import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './../App.css';
import {
  Navbar,
  Nav,
  NavDropdown
} from "react-bootstrap";
import img1 from './../images/1.jpg';
import img2 from './../images/2.jpg';
import img3 from './../images/3.jpg';

class Carouselcomponent extends Component{

    render(){
      return (
        <div className="vh-100">
           <Navbar className="nav position-fixed fixed-top" expand="lg">
        <Navbar.Brand href="#home">DEVEO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Portafolio</Nav.Link>
            <NavDropdown title="Ver más" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sobre mi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Contactame
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
          <Carousel className="mh-100 h-auto d-flex">
          <Carousel.Item className="row vh-100">
      <img
        className="col-lg-6 col-md-8 vw-100 vh-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption className="text-right h-50">
        <h3>First slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item >
          <Carousel.Item className="row vh-100" >
      <img
        className="col-lg-6 col-md-8 vw-100 vh-100"
        src={img2}
        alt="Second slide"
      />
      <Carousel.Caption className="text-right h-50">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
      <Carousel.Item className="row vh-100">
      <img
        className="col-lg-6 col-md-8 vw-100 vh-100"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption className="text-right h-50">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
        </div>
        
      );
    
    }
      
}

export default Carouselcomponent;