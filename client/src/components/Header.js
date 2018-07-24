import React from "react"
import {Link} from "react-router-dom";
import "../App.css"


const Header = () =>{
    return(
        <header className="header">
        <h1>New York Times Scrubber </h1>
        <Link to="/" className="badge badge-primary">Home</Link>
        <Link to="/saved" className="badge badge-primary">Saved</Link>
        <Link to="/search" className="badge badge-primary">Search</Link>
        <Link to="/results" className="badge badge-primary">Results</Link>
       
        </header>
    )
}

export default Header;