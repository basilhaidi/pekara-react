import "bootstrap/dist/css/bootstrap.css";
import "assets/css/style.css";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import Latihan from "pages/Latihan";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/masuk" component={LoginPage} />
        <Route path="/daftar" component={RegisterPage} />
        <Route path="/latihan" component={Latihan} />
      </Router>
    </div>
  );
}

export default App;
