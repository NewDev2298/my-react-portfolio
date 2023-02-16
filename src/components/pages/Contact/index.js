import Footer from "../../Footer"
import Header from "../../Header"

const Contact = () => {
    return(
        <>
        <Header/>
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