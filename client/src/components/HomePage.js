import React, {useState} from 'react'
import './../css/HomePage.css'
import { MoodJournal } from './MoodJournal'

import { Navbar } from './../components/Navbar'

export const HomePage = () => {
const [currentPage, setCurrentPage] = useState('Home');
 const renderPage = () => {
    if (currentPage === 'Home') {
      return <MoodJournal />;
    }
    if (currentPage === 'Saved') {
      return <>
      <h1>Saved entries go here</h1>
      </>;
    }
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

    if(localStorage.getItem("token")){
    return (
       <div className="container-fluid">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
           {renderPage()}
            
      </div>
    )
    }
    else{
        window.location.href="/login";
    }
}
