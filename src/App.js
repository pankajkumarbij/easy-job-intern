import "./App.css";
import React from "react";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/student/login";
import SignUp from "./components/student/register";
import EmployerSignup from "./components/employer/employerSignup";
import EmployerSignin from "./components/employer/employerSignin";
import ContactUs from "./components/contact-us/contact-us";
import AboutUs from "./components/about-us/about-us";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";
import TermsCondition from "./components/terms-condition/terms-condition";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Error from "./components/Error/Error";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducers/userReducer";
import NewInternship from "./components/CreateNew/CreateInternship";
import NewJob from "./components/CreateNew/CreateJob";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  let routes;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const type = JSON.parse(localStorage.getItem("type"));
    console.log(type);
    if (user) {
      dispatch({ type: "USER", payload: {user: user, userType: type} });
    }
  }, []);

  console.log(state);

  if (state) {
    if (state.userType == "employee") {
      routes = (
        <Switch>
          <Route path="/" exact compo>
            <Home />
          </Route>
          <Route path="/create-internship" exact>
            <NewInternship />
          </Route>
          <Route path="/create-job" exact>
            <NewJob />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-conditions" exact>
            <TermsCondition />
          </Route>
          <Route component={Error} />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path="/" exact compo>
            <Home />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-conditions" exact>
            <TermsCondition />
          </Route>
          <Route component={Error} />
        </Switch>
      );
    }
  } else {
    routes = (
      <Switch>
        <Route path="/" exact compo>
          <Home />
        </Route>
        <Route path="/student-login" exact>
          <Login />
        </Route>
        <Route path="/student-signup" exact>
          <SignUp />
        </Route>
        <Route path="/employer-signup" exact>
          <EmployerSignup />
        </Route>
        <Route path="/employer-login" exact>
          <EmployerSignin />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs />
        </Route>
        <Route path="/contact-us" exact>
          <ContactUs />
        </Route>
        <Route path="/privacy-policy" exact>
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-conditions" exact>
          <TermsCondition />
        </Route>
        <Route component={Error} />
      </Switch>
    );
  }

  return routes;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Routing />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
