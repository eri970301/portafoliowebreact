import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";

class Carouselcomponent extends Component {
  render() {
    return (
      <div className="vh-100">
        <Navbar className="nav_color position-fixed fixed-top" expand="lg">
          <Navbar.Brand href="Carousel.js">DEVEO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#sobremi">Sobre mi</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <NavDropdown title="Ver más" id="basic-nav-dropdown">
                <NavDropdown.Item href="#mistrabajos">Mis trabajos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contacto">
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
              <h3>Impacto social</h3>
              <p> Podemos cambiar el mundo de las personas dando a conocer lo que tenemos para contribuir a mejorar nuestra vida. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="row vh-100">
            <img
              className="col-lg-6 col-md-8 vw-100 vh-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption className="text-right h-50">
              <h3>Adaptación
                </h3>
              <p>El mundo se está transformando constantemente, movilizandonos a formas nuevas de interactuar.
                </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="row vh-100">
            <img
              className="col-lg-6 col-md-8 vw-100 vh-100"
              src={img3}
              alt="Third slide"
            />

            <Carousel.Caption className="text-right h-50">
              <h3>Conectividad</h3>
              <p>
              Establecemos vinculos sociales que hacen crecer y nos hacen crecer.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Carouselcomponent;
