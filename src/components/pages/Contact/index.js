import React from "react";
import Footer from "../../Footer"
import Header from "../../Header"

const Contact = () => {
    return(
        <>
            <main>
                <input placeholder="Name"/>
                <input placeholder="name@email.com"/>
                <input placeholder="message"/>
            </main>
        <Footer/>
        </>
    )
}

export default Contact;