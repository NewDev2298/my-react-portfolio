import React from "react";
import image from "../../../assets/images/profilepic.jpeg"
import Footer from "../../Footer";

const About = () => {

    var test = {
        
        picture: {
            display: 'flex',
            flexWrap: 'wrap',
            height: '20vh',
            border: ''
        },

        frame: {
            display: 'flex',
            flexWrap: 'wrap',
        }
    }


    return(
        <div>
            <section >
            <img style={test.picture} src={image} alt=" Terrance Smith"/> 
                <p style={test.frame}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatibus reiciendis? Fuga consectetur animi blanditiis ut magnam porro repellat totam consequuntur. Consequuntur quibusdam adipisci minima provident molestias debitis deserunt voluptatum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet doloribus aperiam sit quis enim eligendi, repellendus, culpa labore quia laudantium iusto quidem ullam impedit, iste cum? Maiores, ipsam recusandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem est temporibus voluptatum dolorum blanditiis saepe assumenda quisquam tempora ex eligendi provident officiis, dolore beatae explicabo eos sequi expedita! Voluptatibus, odit!
                </p>
            </section>
            <Footer/>
        </div>
    )
}

export default About;