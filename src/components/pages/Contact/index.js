import React from "react";
import Footer from "../../Footer"
import Header from "../../Header"

const Contact = () => {

    var test = {

        burger: {
            display:'flex',
            height: '70vh',
            justifyContent: 'center',
            alignItems: 'space-around'

        },

        king: {
            display: '',
            alignItems: 'center'
        }
    }

    return(
        <div>

            <main style={test.burger}>
                <div style={test.king}>
                    <input placeholder="Enter name"/>
                    <input type="email" placeholder="Enter email"/>
                    <textarea rows="3" placeholder="Enter message"/>
                </div>
            </main>
        <Footer/>
        </div>
        
    )
}

export default Contact;