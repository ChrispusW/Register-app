
import './App.css';
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Login} from "./Login";
import Signup from "./Signup";
import {About} from "./About";
import Contact from "./Contact";

import{ BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'; 
function App() {
  return (<Router>
    <div className="app">
      <h2><Navbar/>
      </h2>
    </div>
  <Switch>
    <Route exact path="/Login" component={Login}/>  
    <Route exact path="/signup" component={Signup}/>  
    <Route exact path="/About" component={About}/>  
    <Route exact path="/Contact" component={Contact}/>  
  </Switch>
  <Footer/>
    </Router>
  );
}

export default App;
