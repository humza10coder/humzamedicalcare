import React from "react";
import { Route, Switch } from "react-router-dom";
import Au from "./Au";
import Ds from "./Ds";
import Contact from "./Contact";
import Home from "./Home";
import Doctors from "./Doctors";
import Makea from "./Makea";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Errorpage from "./Errorpage";

function App() {
  return (
      <> 
        <Navbar/>
        <Carousel/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Au}/>
            <Route exact path="/dept" component={Ds}/>
            <Route exact path="/doctors" component={Doctors}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/makea" component={Makea}/>
            <Route component={Errorpage}/>
       </Switch>
      </>
  );
}

export default App;