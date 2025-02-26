import "./index.css"
import { Link, Router } from "react-router-dom"
import { useParams } from "react-router-dom";

function NavBar(){
    return (
        <div id="navbar">

            <div id="homediv">
                <Link to='/'>
            <h2 id='homebutton'>
                Home
            </h2>
                </Link>
            </div>

            <div id="titlediv">
            <Link to='/'>
            <h1 id='Title'>
                Birthday Tracker
            </h1>
            </Link>
            </div>
            
            <div id="adddiv">
            <Link to='/add'>
            <h2 id='addbutton'>
                Add a <br/> Birthday
            </h2>
            </Link>
            </div>

        </div>
        
    )
}

export default NavBar;