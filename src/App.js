/** @format */

import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import AboutUs from "./pages/AboutUs";
import Board from "./pages/Board";
import Contact from "./pages/Contact";
import FnQ from "./pages/FnQ";
import Map from "./pages/Map";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Reports from "./pages/Reports";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="container">
            <Navbar />
            <Route path="/" exact component={AboutUs} />
            <Route path="/board" exact component={Board} />
            <Route path="/contact" component={Contact} />
            <Route path="/fnq" component={FnQ} />
            <Route path="/map" component={Map} />
            <Route path="/search" component={Search} />
            <Route path="/news" component={News} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/reports" component={Reports} />
            <Route path="/about-us" component={AboutUs} />
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
