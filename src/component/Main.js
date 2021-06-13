import React from 'react';
import eksternal from 'assets/img/eksternal.png';
import internal from 'assets/img/internal.png';
import orsenbud from 'assets/img/orsenbud.png';
import logistik from 'assets/img/logistik.png';
import medinfo from 'assets/img/medinfo.png';
import poenaPerkara from 'assets/img/poena.png';
import makrab from 'assets/img/makrab.png';
import halalBihalal from 'assets/img/halalbihalal.png';
import graduation from 'assets/img/graduation.png';
import welcoming from 'assets/img/welcoming.png';
import struktur from 'assets/img/Struktur.jpeg';
import logoGray from 'assets/img/logo-gray.png';
import whatsapp from 'assets/img/whatsapp.png';
import instagram from 'assets/img/instagram.png';
import line from 'assets/img/line.png';
import { Carousel } from 'react-bootstrap';

const Main = () => {
  return (
    <div>
      <main>
        <div
          className="jumbotron jumbotron-fluid bt-2 bg-transparent"
          id="tentang">
          <div className="container">
            <div className="row tentang">
              <div className="col-lg-6">
                <img
                  src={logoGray}
                  className="img-fluid"
                  alt="perkara"
                  style={{ width: '75%' }}
                />
              </div>
              <div className="col-lg-5">
                <h2>
                  <b>Perkara Itu Apa?</b>
                </h2>
                <p>
                  Perkara merupakan singkatan dari Persatuan Karawang Rantau
                  yaitu sebuah organisasi daerah atau komunitas daerah mahasiswa
                  Telkom Univeristy yang berasal dari daerah Kabupaten Karawang.
                  Berdiri pada tahun 2015 yang didirikan oleh Ai dan Rizki
                  dengan tujuan untuk menghimpun mahasiswa yang berasal dari
                  karawang agar bisa berbagi cerita dan melakukan berbagai macam
                  kegiatan bersama
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid bg-dark" id="struktur">
          <div className="container">
            <div className="row struktur">
              <div className="col">
                <h4 className="text-white text-center text-uppercase">
                  <b>Struktur Organisasi</b>
                </h4>
                <div className="card bg-dark ">
                  <img className="card-img" src={struktur} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="jumbotron jumbotron-fluid bg-transparent depart"
          id="depart">
          <div className="container">
            <h4 className="text-center text-uppercase">
              <b>Departemen</b>
            </h4>
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col mb-4">
                <div className="card">
                  <img src={medinfo} className="card-img-top" />
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src={internal} className="card-img-top" />
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src={eksternal} className="card-img-top" />
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src={orsenbud} className="card-img-top" />
                </div>
              </div>
              <div className="col mb-4">
                <div className="card">
                  <img src={logistik} className="card-img-top" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="jumbotron jumbotron-fluid bg-dark kegiatan"
          id="kegiatan">
          <div className="container" id="kegiatan-img">
            <h4 className="text-center text-uppercase">
              <b>kegiatan</b>
            </h4>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={halalBihalal}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={welcoming}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={makrab}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={poenaPerkara}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={graduation}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div
          className="jumbotron jumbotron-fluid bg-transparent kontak"
          id="kontak">
          <div className="container">
            <h1 className="text-center">KONTAK KAMI</h1>
            <section>
              <div className="table-responsive-sm text-center">
                <table className="table">
                  <tr>
                    <th scope="row">
                      <a href="#">
                        <img className="img-fluid icon" src={whatsapp} />
                      </a>
                    </th>
                    <th scope="row">
                      <a href="#">
                        <img className="img-fluid icon" src={instagram} />
                      </a>
                    </th>
                    <th scope="row">
                      <a href="#">
                        <img className="img-fluid icon" src={line} />
                      </a>
                    </th>
                  </tr>
                </table>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
