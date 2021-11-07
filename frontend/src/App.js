import "./App.css";
import Header from "./components/Header/Header";
import PageNavbar from "./components/Navbar/PageNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <PageNavbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
