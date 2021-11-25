import React from "react";
import { Route, Switch } from "react-router-dom";
import Au from "./Au";
import Ds from "./Ds";
import Contact from "./Contact";
import Home from "./Home";
import Doctors from "./Doctors";
import Makea from "./Makea";

function App() {
  return (
      <>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={Au}/>
            <Route exact path="/dept" component={Ds}/>
            <Route exact path="/doctors" component={Doctors}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/makea" component={Makea}/>
       </Switch>
      </>
  );
}

export default App;