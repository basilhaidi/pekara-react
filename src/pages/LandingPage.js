import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "assets/css/style.css";
import Header from "component/Header";
import Main from "component/Main";
import Footer from "component/Footer";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}

export default LandingPage;
