import './App.css';
import NavBar from './components/navbar';
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import {Home} from './components/home';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndCondition';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Router>
            <Switch>
            <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginForm} />
                <Route path="/signup" exact component={RegisterForm} />
                <Route path="/about" exact component={AboutUs} />
                <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                <Route path="/Terms-and-Conditions" exact component={TermsAndConditions} />
            </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
