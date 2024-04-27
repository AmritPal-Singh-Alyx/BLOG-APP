import Logo from "../utils/Logo.jpg";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/header.css';


const Header = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="nav__logo" >
                    <img src={Logo} alt="Blog Logo" />
                </Link>
                <ul className="nav__menu">
                    <li><Link to="/profile/bfabf">AmritPal</Link></li>
                    <li><Link to="/create">Create Posts</Link></li>
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/Logout">Logout</Link></li>
                </ul>
                <button className="nav__toggle-btn">
                    <AiOutlineClose />
                </button>
            </div>
        </nav>
    )
}

export default Header;