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
                <a href="https://dry-tor-88754.herokuapp.com/">
                <img style={test.bell} src="https://via.placeholder.com/300" alt="placeholder image" />
                </a>
                <a href="https://newdev2298.github.io/seo-refactor/">
                <img style={test.bell}src="https://via.placeholder.com/300" alt="placeholder image" />
                </a>
                <a href="https://fierce-caverns-99507.herokuapp.com/">
                <img style={test.bell} src="https://via.placeholder.com/300" alt="placeholder image" />
                </a>
                <a href="https://newdev2298.github.io/prework-study-guide/">
                <img style={test.bell} src="https://via.placeholder.com/300" alt="placeholder image" />
                </a>
            </main>
            <Footer />
        </ div>
    )
}

export default Projects;