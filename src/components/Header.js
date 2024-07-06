import Logo from "../utils/Logo.jpg";
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/header.css';
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";


const Header = () => {


    const [isShowingNav, setIsShowingNav] = useState(window.innerWidth > 800);
    const { currentUser } = useContext(UserContext);



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
    }

    return (
        <nav>
            <div className="container nav__container">
                <Link to="/" className="nav__logo" onClick={() => { window.scroll(0, 0); navCloseHandler() }} >
                    <img src={Logo} alt="Blog Logo" />
                </Link>
                {currentUser?.id && isShowingNav && <ul className="nav__menu">
                    <li><Link to={`/profile/${currentUser.id}`} onClick={navCloseHandler}>{currentUser?.name}</Link></li>
                    <li><Link to="/create" onClick={navCloseHandler}>Create Posts</Link></li>
                    <li><Link to="/authors" onClick={navCloseHandler}>Authors</Link></li>
                    <li><Link to="/logout" onClick={navCloseHandler}>Logout</Link></li>
                </ul>
                }
                {!currentUser?.id && isShowingNav && <ul className="nav__menu">
                    <li><Link to="/authors" onClick={navCloseHandler}>Authors</Link></li>
                    <li><Link to="/login" onClick={navCloseHandler}>Login</Link></li>
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