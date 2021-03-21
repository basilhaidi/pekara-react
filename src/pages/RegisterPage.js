import React, { Component } from "react";
import axios from "axios";

import logoGray from "assets/img/logo-gray.png";
import background from "assets/img/sawah.jpg";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Jumbotron,
  Row,
} from "react-bootstrap";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};
class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nim: "",
      password: "",
      kode: "",
      formErrors: {
        nim: "",
        password: "",
        kode: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      const data = {
        nim: this.state.nim,
        password: this.state.password,
        activationToken: this.state.kode,
      };

      axios
        .post(`https://perkara.herokuapp.com/auth/register`, data)
        .then((res) => {
          console.log(res);
          const response = res.data;

          if (response.statusCode == 200) {
            alert("Berhasil");
          } else {
            alert("Gagal");
          }
        });
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    if (name.nim < 10) {
      formErrors.nim = value.length < 10 ? "Wajib 10 Angka" : "";
    } else if ("password") {
    }
    switch (name) {
      case "nim":
        formErrors.nim = value.length < 10 ? "Wajib 10 Angka" : "";
        break;
      case "password":
        formErrors.password = value.length < 6 ? "minimal 6 karakter" : "";
        break;
      case "kode":
        formErrors.kode = value.length < 10 ? "harus 10 karakter" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  render() {
    const { formErrors } = this.state;
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
              <Card className="bg-dark text-light">
                <Card.Body>
                  <h2 className="text-center">Buat Akun</h2>
                  <Form onSubmit={this.handleSubmit} noValidate>
                    <Form.Group className="nim">
                      <Form.Label>NIM</Form.Label>
                      <Form.Control
                        className={formErrors.nim.length > 0 ? "error" : null}
                        type="number"
                        name="nim"
                        noValidate
                        placeholder="Masukan NIM"
                        onChange={this.handleChange}
                      />
                      {formErrors.nim.length > 0 && (
                        <span className="errorMessage">{formErrors.nim}</span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Kata Sandi</Form.Label>
                      <Form.Control
                        className={
                          formErrors.password.length > 0 ? "error" : null
                        }
                        type="password"
                        name="password"
                        noValidate
                        placeholder="Masukan Kata Sandi"
                        onChange={this.handleChange}
                      />
                      {formErrors.password.length > 0 && (
                        <span className="errorMessage">
                          {formErrors.password}
                        </span>
                      )}
                    </Form.Group>
                    <Form.Group controlId="formGroupKode">
                      <Form.Label>Kode Aktivasi</Form.Label>
                      <Form.Control
                        className={formErrors.kode.length > 0 ? "error" : null}
                        type="text"
                        name="kode"
                        noValidate
                        placeholder="Masukan Kode Aktivasi"
                        onChange={this.handleChange}
                      />
                      {formErrors.kode.length > 0 && (
                        <span className="errorMessage">{formErrors.kode}</span>
                      )}
                    </Form.Group>
                    <div className="text-center tombol">
                      <Button type="submit" variant="light" value="Submit">
                        <strong>DAFTAR</strong>
                      </Button>
                    </div>
                  </Form>
                  <div className="text-center">
                    Sudah punya akun?{" "}
                    <Link to="/masuk" type="button">
                      <span
                        style={{
                          color: "#FF5C5C",
                        }}
                      >
                        Login disini
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

export default RegisterPage;
