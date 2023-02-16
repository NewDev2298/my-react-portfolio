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
            padding: '16px',
            alignItems: 'space-around',
            height: '50vh'
        },

        bell: {
            width: '300px',
            height: '300px'
        }
    }

    return (
        <div>

            <h3>Portfolio</h3>
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