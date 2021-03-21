import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoNavbar from "assets/img/logo-navbar.png";
import { Container, Nav, Navbar } from "react-bootstrap";

export class NavbarPerkara extends Component {
  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="shadow-sm"
        >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src={logoNavbar} width="auto" height="48" />
                <span className=" navbar-brand text-white ml-2">PERKARA</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#tentang">Tentang</Nav.Link>
                <Nav.Link href="#struktur">Strukrtur Organisasi</Nav.Link>
                <Nav.Link href="#kegiatan">Kegiatan</Nav.Link>
                <Nav.Link href="#kontak">Kontak</Nav.Link>
                <Link
                  to="/masuk"
                  type="button"
                  className="nav-item btn btn-outline-light ml-2 tombol"
                >
                  <b>Masuk</b>
                </Link>

                <Link
                  to="/daftar"
                  type="button"
                  className="nav-item btn btn-light  ml-2 tombol"
                >
                  <b>Aktivasi Akun</b>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarPerkara;
