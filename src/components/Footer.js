import { Link } from 'react-router-dom';
import '../styles/footer.css';

const Footer = () => {
    return (

        <footer>

            <ul className="footer__categories">
                <li><Link to="/posts/categories/Agriculture">Agriculture</Link></li>
                <li><Link to="/posts/categories/Business">Business</Link></li>
                <li><Link to="/posts/categories/Education">Education</Link></li>
                <li><Link to="/posts/categories/Entertainment">Entertainment</Link></li>
                <li><Link to="/posts/categories/Art">Art</Link></li>
                <li><Link to="/posts/categories/Investment">Investment</Link></li>
                <li><Link to="/posts/categories/Uncategorized">Uncatergorized</Link></li>
                <li><Link to="/posts/categories/Weather">Weather</Link></li>
            </ul>
            <div className="footer__copyright">
                <small>All rights Reserved &copy; Copyright, Amritpal Singh SDE</small>
            </div>
        </footer>
    )
}
export default Footer;