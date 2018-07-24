import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header.js";
import Search from "./pages/Search.js";
import Results from "./pages/Results.js";
import Saved from "./pages/Saved.js";


const App = () => {
  return(
    
   <Router>
        <div className='container'>
     <Header/>
     
    <Route exact path="/search" component={Search}/>
    <Route exact path="/results" component={Results}/>
    <Route exact path="/saved" component={Saved}/>
    
    </div>
    </Router>
   
  )
}

export default App;