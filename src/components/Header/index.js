

const Header = ({ currentPage, changePage }) => {
    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <h3 class="navbar-brand"><strong>Terrance Smith</strong></h3>
                <ul className="nav">
                    <li className="nav-item ">
                        <a href="#about"
                            onClick={() => changePage('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" 
                            onClick={() => changePage('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact"
                            onClick={() => changePage('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#resume"
                            onClick={() => changePage('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;