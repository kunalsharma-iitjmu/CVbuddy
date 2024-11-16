import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="head">
                <h1 id="title">ElevateCV</h1>
                <ul id="list-container">
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </header>
            <hr className="line" />
        </>
    );
};

export default Header;
