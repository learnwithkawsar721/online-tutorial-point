import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Servicess from "./components/Servicess/Servicess";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route exact path="/home">
            <Main></Main>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/service">
           
            <Servicess />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
