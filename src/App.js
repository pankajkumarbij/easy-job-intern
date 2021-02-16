import './App.css';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <h1>Welcome to Easy Job Intern</h1> */}
      <AboutUs />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
