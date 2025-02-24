import "./index.css"
import { Link, Router } from "react-router-dom"
import { useParams } from "react-router-dom";

function NavBar(){
    return (
        <div id="navbar">

            <h2 id='homebutton'>
                Home
            </h2>

            <Link to='/'>
            <h1 id='Title'>
                Birthday Tracker
            </h1>
            </Link>
            
            <Link to='/add'>
            <h2 id='addbutton'>
                Add a Birthday
            </h2>
            </Link>

        </div>
        
    )
}

export default NavBar;