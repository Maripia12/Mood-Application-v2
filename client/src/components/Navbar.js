import React from 'react'
import './../css/Navbar.css'

export const Navbar = () => {
    return (
        <nav>
           <div id="navText"> MindQuote  </div> 
           <a className="mrg" onClick={logout}>Logout</a>
        </nav>
    )
}



function logout(){
    localStorage.removeItem("token");
    window.location.href="/login";


}
