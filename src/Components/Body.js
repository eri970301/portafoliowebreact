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
import responsive from "./../images/responsive.png";
import react from "./../images/react.png";
import bootstrap from "./../images/bootstrap.png";
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
      <div id="sobremi">
        <Container className="h-auto">
          <Row className="mt-5 mb-5">
            <Col className="">
              <Image src={img5} roundedCircle className="img_me float-right" />
              <h2>Soy Erika Otalvaro, Web Developer</h2>
              <p className="text">
                Soy profesional en licenciatura en ciencias sociales y
                desarrolladora Web Front-End, con una alta capacidad de
                aprendizaje, abierta a nuevos conocimientos y muchas ganas de
                crecer profesionalmente. Confío en mis capacidades personales
                para dar lo mejor de mi en cada proyecto incorporando diversos
                conocimientos para obtener resultados integrales y creativos.
              </p>
            </Col>
          </Row>
        </Container>
        <div className="min-vh-100 vw-100 triangle" id="servicios">
          <Row className="container-fluid">
            <div className="col-12 mt-5">
              <h2 className="text-center">Mis servicios</h2>
            </div>
            <Row className="m-auto h-100">
              <div className="col-4 mb-3">
                <img src={responsive} alt="" className="img-services"></img>
              </div>
              <div className="col-4 mb-3">
                <img src={react} alt="" className="img-services"></img>
              </div>
              <div className="col-4 mb-3">
                <img src={bootstrap} alt="" className="img-services"></img>
              </div>
            </Row>
            <Row className="m-auto">
              <ul className="mt-5" style={{ listStyle: "none" }}>
                <li className="text text-center mt-3">Paginas Web con diseño responsivo para moviles, tablets y desktop.</li>
                <li className="text text-center mt-3">Uso de libreria ReactJS para una mejor experiencia del usuario con el sitio Web.</li>
                <li className="text text-center mt-3">Interactividad del usuario con el sistema teniendo en cuenta el diseño centrado en el usuario.</li>
              </ul>
            </Row>
          </Row>
        </div>
        <Row className="row3" id="mistrabajos">
          <div className="col-12 text-center elements">
            <h2 className="mt-5">Mis trabajos</h2>
          </div>
          <Row className="p-3 mt-3">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
              <div className="hovereffect">
                <img className="img-responsive" src={document} alt="" />
                <div className="overlay">
                  <h2>Documento bibliográfico</h2>
                  <a
                    className="info"
                    href="https://eri970301.github.io/documentationpage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    className="info"
                    href="https://eri970301.github.io/landingpage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    className="info"
                    href="https://eri970301.github.io/surveyform/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  <a
                    className="info"
                    href="https://eri970301.github.io/tributepage/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ingresa aquí
                  </a>
                </div>
              </div>
            </div>
          </Row>
        </Row>
        <footer className="page-footer foot font-small pt-4" id="contacto">
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
                    <a
                      href="https://www.linkedin.com/in/erika-otalvaro-zuleta-a96365139/"
                      className="links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/fckHxC"
                      className="links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                      ></FontAwesomeIcon>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/eriozul/?hl=es-la"
                      className="links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                    <a
                      href="mailto:Ejotalvaroz@correo.udistrital.edu.co?Subject=Interesado%20en%20una%20página%20web"
                      className="links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                      Correo Gmail
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+573046387163"
                      className="links"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
