import React, { Component } from "react";

import logoGray from "assets/img/logo-gray.png";
import background from "assets/img/sawah.jpg";
import {
  Card,
  Col,
  Container,
  Form,
  Row,
  Button,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xl className="p-0">
              <Container
                fluid
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "no-repeat",
                  minHeight: "100vh",
                }}
              >
                <Col>
                  <Link to="/">
                    <Image
                      fluid
                      rounded
                      src={logoGray}
                      style={{
                        width: "60%",
                        marginTop: "26%",
                        marginLeft: "20%",
                      }}
                    />
                  </Link>
                </Col>
              </Container>
            </Col>
            <Col xl className="align-self-center p-2">
              <Card className="bg-dark text-white">
                <Card.Body>
                  <h2 className="text-center">Masuk</h2>
                  <Form>
                    <Form.Group controlId="formGroupNim">
                      <Form.Label>NIM</Form.Label>
                      <Form.Control type="number" placeholder="Masukan NIM" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Kata Sandi</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Masukan Kata Sandi"
                      />
                    </Form.Group>
                    <div className="text-center tombol">
                      <Button type="submit" variant="light">
                        <strong>MASUK</strong>
                      </Button>
                    </div>
                  </Form>
                  <div className="text-center">
                    Sudah punya akun?
                    <Link to="/daftar">
                      <span
                        style={{
                          color: "#FF5C5C",
                        }}
                      >
                        {" "}
                        Daftar disini
                      </span>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
