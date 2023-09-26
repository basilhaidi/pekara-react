import React, { useState } from 'react';
import axios from 'axios';

import logoGray from 'assets/img/logo-gray.png';
import background from 'assets/img/sawah.jpg';
import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Jumbotron,
  Row,
} from 'react-bootstrap';

const RegisterPage = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [activationToken, setKode] = useState('');
  const [formErrors, setFormErrors] = useState({
    nim: '',
    pass: '',
    activationToken: '',
  });

  const handleSubmit = () => {
    const data = {
      nim,
      password,
      activationToken,
    };
    axios
      .post(`https://perkara.herokuapp.com/auth/register`, data)
      .then((res) => {
        console.log(res);
        const response = res.data;

        if (response.statusCode == 200) {
          alert('Berhasil');
        } else {
          alert('Gagal');
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nim':
        setNim(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'kode':
        setKode(value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xl className="p-0">
            <Container
              fluid
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
              }}>
              <Col>
                <Link to="/">
                  <Image
                    fluid
                    rounded
                    src={logoGray}
                    style={{
                      width: '60%',
                      marginTop: '26%',
                      marginLeft: '20%',
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
                <Form onSubmit={handleSubmit} noValidate>
                  <Form.Group className="nim">
                    <Form.Label>NIM</Form.Label>
                    <Form.Control
                      // className={formErrors.nim.length > 0 ? 'error' : null}
                      type="number"
                      name="nim"
                      noValidate
                      placeholder="Masukan NIM"
                      onChange={handleChange}
                    />
                    {/* {formErrors.nim.length > 0 && (
                      <span className="errorMessage">{formErrors.nim}</span>
                    )} */}
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Kata Sandi</Form.Label>
                    <Form.Control
                      // className={
                      //   formErrors.password.length > 0 ? 'error' : null
                      // }
                      type="password"
                      name="password"
                      noValidate
                      placeholder="Masukan Kata Sandi"
                      onChange={handleChange}
                    />
                    {/* {formErrors.password.length > 0 && (
                      <span className="errorMessage">
                        {formErrors.password}
                      </span>
                    )} */}
                  </Form.Group>
                  <Form.Group controlId="formGroupKode">
                    <Form.Label>Kode Aktivasi</Form.Label>
                    <Form.Control
                      // className={formErrors.kode.length > 0 ? 'error' : null}
                      type="text"
                      name="kode"
                      noValidate
                      placeholder="Masukan Kode Aktivasi"
                      onChange={handleChange}
                    />
                    {/* {formErrors.kode.length > 0 && (
                      <span className="errorMessage">{formErrors.kode}</span>
                    )} */}
                  </Form.Group>
                  <div className="text-center tombol">
                    <Button type="submit" variant="light" value="Submit">
                      <strong>DAFTAR</strong>
                    </Button>
                  </div>
                </Form>
                <div className="text-center">
                  Sudah punya akun?{' '}
                  <Link to="/masuk" type="button">
                    <span
                      style={{
                        color: '#FF5C5C',
                      }}>
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
};

export default RegisterPage;
