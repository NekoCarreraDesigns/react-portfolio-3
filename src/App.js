import React from 'react';
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import Jams from "./components/Jams/Jams";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header}></Route>
          <Route exact path="/about-me" component={Body}></Route>
          <Route exact path="/my-portfolio" component={Card}></Route>
          <Route exact path="/my-jams" component={Jams}></Route>
          <Route exact path="/contact-me" component={Contact}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
