import React from "react";
import image from "../../../assets/images/terrance.jpeg"
import Footer from "../../Footer";

const About = () => {
    return(
        <div>
            <img src={image} alt=" Terrance Smith"/> 
            <section>
                <p>
                    this is paragraphy about me
                </p>
            </section>
            <Footer/>
        </div>
    )
}

export default About;