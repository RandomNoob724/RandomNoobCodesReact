import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import About from "./components/About";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav title="RandomNoobCodes" />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
