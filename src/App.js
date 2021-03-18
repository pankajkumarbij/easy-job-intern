import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/student/login";
import SignUp from "./components/student/register";
import EmployerSignup from './components/employer/employerSignup';
import EmployerSignin from './components/employer/employerSignin';
import ContactUs from "./components/contact-us/contact-us";
import AboutUs from "./components/about-us/about-us";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";
import TermsCondition from "./components/terms-condition/terms-condition";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
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
          </Switch>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
