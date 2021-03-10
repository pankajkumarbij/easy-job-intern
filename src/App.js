import './App.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home/home';
import Login from './components/student/login';
import SignUp from './components/student/register';
import ContactUs from './components/contact-us/contact-us';
import AboutUs from './components/about-us/about-us';
import PrivacyPolicy from './components/privacy-policy/privacy-policy';
import TermsCondition from './components/terms-condition/terms-condition';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Switch>
                <Route path="/" exact > <Home/> </Route>
                <Route path="/student-login" exact > <Login/> </Route>
                <Route path="/student-signup" exact > <SignUp/> </Route>
                <Route path="/about-us" exact > <AboutUs/> </Route>
                <Route path="/contact-us" exact > <ContactUs/> </Route>
                <Route path="/privacy-policy" exact > <PrivacyPolicy/> </Route>
                <Route path="/terms-conditions" exact > <TermsCondition/> </Route>
            </Switch>
            

        <Footer />
        </BrowserRouter>
        
    </div>
  );
}

export default App;
