import React from "react";
import Footer from "../../Footer"
import Header from "../../Header"
import "./test.css"
const Projects = () => {

    var test = {
        taco: {
            display:'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '12px',
            alignItems: 'space-around',
            height: '70vh',
            // width: '76vw'
        },

        bell: {
            width: '300px',
            height: '300px'
        },

        grande: {
            display: 'flex',
            margin: '10px',
            fontWeight: 'bold',
            
        }
    }

    return (
        <div>

            <h3 style={test.grande}>Portfolio</h3>
            <main style={test.taco}>
                <img style={test.bell} src="https://via.placeholder.com/300" alt="placeholder image" />
                <img style={test.bell}src="https://via.placeholder.com/300" alt="placeholder image" />
                <img style={test.bell} src="https://via.placeholder.com/300" alt="placeholder image" />
                <img style={test.bell} src="https://via.placeholder.com/300" alt="placeholder image" />
            </main>
            <Footer />
        </ div>
    )
}

export default Projects;