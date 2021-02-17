import './App.css';
import NavBar from './components/navbar';
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Router>
            <h1>Welcome to Easy Job Intern</h1>
            <Switch>
                <Route path="/login" exact component={LoginForm} />
                <Route path="/signup" exact component={RegisterForm} />
                <Route path="/about" exact component={AboutUs} />
            </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
