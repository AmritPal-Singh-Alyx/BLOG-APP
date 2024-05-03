import Logo from "../utils/Logo.jpg";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/header.css';
import { useEffect, useState } from "react";


const Header = () => {


    const [isShowingNav, setIsShowingNav] = useState(false);


    useEffect(() => {

        const handleResize = () => {
            setIsShowingNav(window.innerWidth > 800)
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    const navCloseHandler = () => {

        if (window.innerWidth < 800) {
            setIsShowingNav(false);
        }
        else {
            setIsShowingNav(true)
        }
    }

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="nav__logo" onClick={navCloseHandler} >
                    <img src={Logo} alt="Blog Logo" />
                </Link>
                {isShowingNav && <ul className="nav__menu">
                    <li><Link to="/profile/bfabf" onClick={navCloseHandler}>AmritPal</Link></li>
                    <li><Link to="/create" onClick={navCloseHandler}>Create Posts</Link></li>
                    <li><Link to="/authors" onClick={navCloseHandler}>Authors</Link></li>
                    <li><Link to="/Logout" onClick={navCloseHandler}>Logout</Link></li>
                </ul>
                }
                <button className="nav__toggle-btn" onClick={() => setIsShowingNav(!isShowingNav)}>
                    {
                        isShowingNav ? <AiOutlineClose /> : <FaBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Header;