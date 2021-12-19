import "./App.css";
import DM from "./components/DM/DM";
import { Navbar } from "./components/Navbar/Navbar";
import { Suggest } from "./components/suggestions/Suggest";
import { Home } from "./components/sailu/src/Pages/Home";
import { Switch, Route } from "react-router-dom";
import { Signup_page } from "./components/sailu/src/Pages/signup/Signup_page";
import Homepage from "./components/Homepage/Homepage";
import { Birthmain } from "./components/sailu/src/Pages/birthday/Birthmain";
import { Emailmain } from "./components/sailu/src/Pages/email/Emailmain";

import { ProfilePage } from "./components/ProfilePage";
import { AboutPage } from "./components/Accountage";

function App() {
  return (
    <div className="App">
      {/* <Signup_page/> */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Homepage">
          <Navbar />
          <Homepage />
        </Route>
        <Route exact path="/Signup_page">
          <Signup_page />
        </Route>

        <Route exact path="/Birthday">
          <Birthmain />
        </Route>
        <Route exact path="/Email">
          <Emailmain />
        </Route>
        <Route exact path="/Homepage">
          <Navbar />
          <Homepage />
        </Route>
        <Route exact path="/Suggest">
          <Navbar />
          <Suggest />
        </Route>

        <Route exact path="/chat">
          <Navbar />
          <DM />
        </Route>

        <Route exact path="/Postpage/:na">
          <Navbar />
          <AboutPage />
        </Route>

        <Route exact path="/account">
          <Navbar />
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
