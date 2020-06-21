import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import img5 from "./../images/me.jpg";
import document from "./../images/document.png";
import landing from "./../images/landing.JPG";
import survey from "./../images/survey.png";
import tribute from "./../images/tribute.png";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Container className="vh-100 h-auto">
          <Row className="mt-5 mb-5">
            <Col className="">
              <Image src={img5} roundedCircle className="img_me float-right" />
              <h2>Soy Erika Otalvaro, Web Developer</h2>
              <p></p>
            </Col>
          </Row>
        </Container>
        <div className="vh-100 vw-100 triangle">
          <Row className="container-fluid">
            <Col className="mt-5">
              <h1 className="text-center">Mis servicios</h1>
            </Col>
          </Row>
        </div>
        <Row className="row3">
          <div className="col-12 text-center elements">
            <h1 className="mt-4">Mis trabajos</h1>
          </div>
            <Row className="p-3 mt-5">
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                <div className="hovereffect">
                  <img className="img-responsive" src={document} alt="" />
                  <div className="overlay">
                    <h2>Documento bibliográfico</h2>
                    <a className="info" href="https://eri970301.github.io/documentationpage/" target="_blank" rel="noopener noreferrer">
                      Ingresa aquí
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                <div className="hovereffect">
                  <img className="img-responsive" src={landing} alt="" />
                  <div className="overlay">
                    <h2>Página de aterrizaje</h2>
                    <a className="info" href="https://eri970301.github.io/landingpage/" target="_blank" rel="noopener noreferrer">
                      Ingresa aquí
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                <div className="hovereffect">
                  <img className="img-responsive" src={survey} alt="" />
                  <div className="overlay">
                    <h2>Formulario</h2>
                    <a className="info" href="https://eri970301.github.io/surveyform/" target="_blank" rel="noopener noreferrer">
                      Ingresa aquí
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
                <div className="hovereffect">
                  <img className="img-responsive" src={tribute} alt="" />
                  <div className="overlay">
                    <h2>Página tributo</h2>
                    <a className="info" href="https://eri970301.github.io/tributepage/" target="_blank" rel="noopener noreferrer">
                      Ingresa aquí
                    </a>
                  </div>
                </div>
              </div>
            </Row>
        </Row>
        <footer className="page-footer foot font-small pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Contactame</h5>
                <p>
                  Para mayor información, contáctame a traves de estos links.
                </p>
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Redes Sociales</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.linkedin.com/in/erika-otalvaro-zuleta-a96365139/" className="links" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/fckHxC" className="links" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                      ></FontAwesomeIcon>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/eriozul/?hl=es-la" className="links" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                      ></FontAwesomeIcon>
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Cuentas</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="mailto:Ejotalvaroz@correo.udistrital.edu.co?Subject=Interesado%20en%20una%20página%20web" className="links" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      Correo Gmail
                    </a>
                  </li>
                  <li>
                    <a href="tel:+573046387163" className="links" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faPhoneSquareAlt}
                      ></FontAwesomeIcon>
                      Llamar o escribir
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            © 2020 Copyright: Erika Otálvaro
          </div>
        </footer>
      </div>
    );
  }
}

export default Body;
