
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Contact from "./Contact";
import Admin from "./Admin";
import{ BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

function App() {
  return (<Router>
    <div className="container-fluid">
      <h2><Navbar/>
      
      <h2 className="container-fluid">welcome to stratcom <i className="fab fa-speakap"></i></h2>
      <img className="myslides" src="https://images.unsplash.com/photo-1554435493-93422e8220c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img>
      </h2>
<br></br><strong className="container-fluid">choose what you want to do on this site.</strong>
    </div>
    
  <Switch>
    <Route exact path="/Login" component={Login}/>  
    <Route exact path="/signup" component={Signup}/>  
    <Route exact path="/About" component={About}/>  
    <Route exact path="/Contact" component={Contact}/> 
    <Route exact path="/Admin" component={Admin}/>
  </Switch>
  <Footer/>
    </Router>
  );
}


export default App;
