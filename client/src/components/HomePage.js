import React from 'react'
import './../css/HomePage.css'

import { Navbar } from './../components/Navbar'

export const HomePage = () => {

    if(localStorage.getItem("token")){
    return (
        <body>
            <Navbar/>
            <div id="container">
            <div id="mainP"> Welcome to MindQuote</div>
            <form id="searchForm">
                <label id="searchLabel">Search</label>
                <input for="text" id="searchInput" placeholder="search your favorite quote"></input>
                <br/>
                <button id="btn" className="searchBtn">Search</button>
            </form>
            </div>
            
        </body>
    )
    }
    else{
        window.location.href="/login";
    }
}
