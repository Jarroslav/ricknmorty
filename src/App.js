import React, { Component } from "react";

import { Route, HashRouter as Router } from "react-router-dom";

import { Header } from "./components/Header";

import { Home } from "./components/1_Home";

import { Characters } from "./components/2_Characters";

import { Episodes } from "./components/3_Episodes";

import { Locations } from "./components/4_Locations";

import { Watchlist } from "./components/5_Watch_List";


class App extends Component {
  render() {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/characters/" component={Characters} />
            <Route path="/episodes/" component={Episodes} />
            <Route path="/locations/" component={Locations} />
            <Route path="/watchlist/" component={Watchlist} />
        </Router>
    );
  }
}

export default App;
