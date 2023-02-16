import React from "react";
import Footer from "../../Footer"
import Header from "../../Header"

const Contact = () => {
    return(
        <>
            <main>
                <div className="">

                    <input class="form-group col-3 " placeholder="Enter name"/>
                    <div class="form-group col-3 ">
                    <input type="email" class="form-control"  placeholder="Enter email"/>
                    </div>
                    <textarea class="form-group col-3" id="exampleTextarea" rows="3" placeholder="Enter message"/>
                </div>
            </main>
        <Footer/>
        </>
    )
}

export default Contact;