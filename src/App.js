import './App.css';
import NavBar from './components/navbar';
<<<<<<< HEAD
import LoginForm from "./components/login";
import RegisterForm from "./components/register";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

=======
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
>>>>>>> 4a1c9dc4d9436a5d141718e152056e62b193f6d7

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    
    <Router>
      
      <NavBar />
      <h1>Welcome to Easy Job Intern</h1>
    <Switch>
    
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={RegisterForm} />
      </Switch>
      
    </Router>

=======
      <NavBar/>
      {/* <h1>Welcome to Easy Job Intern</h1> */}
      <AboutUs />
      {/* <Footer/> */}
>>>>>>> 4a1c9dc4d9436a5d141718e152056e62b193f6d7
    </div>

    
  );
}

export default App;
