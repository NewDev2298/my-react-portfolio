import React from "react";
import image from "../../../assets/images/terrance.jpeg"

const About = () => {
    return(
        <div>
            <img src={image} alt=" Terrance Smith"/> 
            <section>
                <p>
                    this is paragraphy about me
                </p>
            </section>
        </div>
    )
}

export default About;