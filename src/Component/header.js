import React from "react";
import logoNavbar from "assets/img/logo-navbar.png";
import background from "assets/img/background.png";

export default function header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
          <div className="container">
            <a className="navbar-brand " href="#">
              <img src={logoNavbar}></img> <span>PERKARA</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto ">
                <a className="nav-item nav-link" href="#tentang">
                  Tentang
                </a>
                <a className="nav-item nav-link" href="#struktur">
                  Strukrtur Organisasi
                </a>
                <a className="nav-item nav-link" href="#kegiatan">
                  Kegiatan
                </a>
                <a className="nav-item nav-link" href="#kontak">
                  Kontak
                </a>
                <a
                  type="button"
                  className="nav-item btn btn-outline-light ml-2 tombol"
                  href="#"
                >
                  <b>Masuk</b>
                </a>
                <a
                  type="button"
                  className="nav-item btn btn-light ml-2 tombol"
                  href="#"
                >
                  <b>Daftar</b>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="jumbotron jumbotron-fluid background"
          // style="background-image: url(assets/img/background.png);"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container" style={{ marginTop: "150px" }}>
            <h1 className="display-4 text-white mt-4 ">
              Persatuan Karawang Rantau
            </h1>
            <p className="lead text-white ">Selamat Datang Wargi Karawang !</p>
            <a type="button" className="nav-item btn btn-light tombol" href="#">
              <b>YUK GABUNG!</b>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
