

const Footer = () => {

    const test = {

        candy: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'gray',
            alignItems: 'center',
            padding: '12px',
            color: 'white',
            fontWeight:'bold'
        },

        man: {
            marginRight: '16px',
            alignItems: 'center'

        }

    }
    return(
        <footer style={test.candy}>
            {/* <ul style={test.man}>
                <li><a href="#">Contact Me</a></li>
            </ul> */}
            <div> Made with 💚 and React.</div>
            
        </footer>
    )
}

export default Footer;