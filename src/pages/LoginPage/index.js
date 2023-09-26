import React, { useState } from 'react';

import logoGray from 'assets/img/logo-gray.png';
import background from 'assets/img/sawah.jpg';

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { validator } from 'utilities';
import Cookies from 'js-cookie';
import axios from 'axios';

const LoginPage = () => {
  console.log(validator);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();

  const onSubmit = async (values) => {
    console.log(values);
    axios
      .post('https://api-perkara.herokuapp.com/auth/login', {
        nim: values.nim,
        password: values.password,
      })
      .then((res) => {
        console.log(res.data.data.access_token);
        let token = res.data.data.access_token;
        Cookies.set('token', `${token}`, { expires: 1 });
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(errors);
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
                  <img
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
            <Card className="bg-dark text-white">
              <CardBody>
                <h2 className="text-center">Masuk</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="nim">NIM</Label>
                        <Input
                          type="text"
                          name="nim"
                          id="nim"
                          invalid={Boolean(errors.nim)}
                          {...register('nim', {
                            required: validator.required,
                            minLength: validator.minLength(10),
                          })}
                        />
                        <FormFeedback>{errors?.nim?.message}</FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="password">Kata Sandi</Label>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          invalid={Boolean(errors.password)}
                          {...register('password', {
                            required: validator.required,
                          })}
                        />
                        <FormFeedback>{errors?.password?.message}</FormFeedback>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Button onClick={handleSubmit(onSubmit)} type="submit" color="light">
                    <strong>MASUK</strong>
                  </Button>
                </Form>

                <div className="text-center">
                  Sudah punya akun?
                  <Link to="/daftar">
                    <span
                      style={{
                        color: '#FF5C5C',
                      }}>
                      {' '}
                      Daftar disini
                    </span>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
