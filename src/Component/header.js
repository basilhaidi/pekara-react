import React from "react";
import background from "assets/img/background.png";
import NavbarPerkara from "./NavbarPerkara";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <div>
      <header>
        <NavbarPerkara></NavbarPerkara>
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
            <Link
              to="/daftar"
              type="button"
              className="nav-item btn btn-light tombol"
            >
              <b>YUK GABUNG!</b>
            </Link>
            ;
          </div>
        </div>
      </header>
    </div>
  );
}
