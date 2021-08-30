import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";
import { HomePage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AllMoods } from "./components/AllMoods";
import { FirstPage } from "./components/FirstPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={() => <FirstPage />} exact />
        <Route path="/homepage">
          {" "}
          <HomePage />{" "}
        </Route>

        <Route path="/allMoods">
          {" "}
          <AllMoods />{" "}
        </Route>
        <Route path="/login">
          {" "}
          <LoginPage />{" "}
        </Route>
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </>
  );
}

export default App;
