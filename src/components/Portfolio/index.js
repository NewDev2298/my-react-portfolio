import React, { useState } from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Footer from "../Footer";
import Main from "../Main";
import Header from "../Header";


export default function Portfolio() {
   
    const [currentPage, setPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
      };


      const changePage = (page) => setPage(page);


    return(
        <div>
        <Header currentPage={currentPage} changePage={changePage} />
        {renderPage()}
      </div>
    )
};
