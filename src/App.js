import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Component/Home/Home";
// import Error from "./Pages/Error";
import { CreateConText } from "./ContextApi/createConText";

const App = () => {
  return (
    <CreateConText>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route> */}
          {/* <Route component={Error}></Route> */}
        </Switch>
      </div>
    </CreateConText>
  );
};

export default App;
