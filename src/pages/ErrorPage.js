import { Link } from "react-router-dom";
import "../styles/errorPage.css"




const ErrorPage = () => {
    return (
        <section className="error-page">
            <div className="center">
                <Link to="/" className="btn primary" >Go Back to Home</Link>
                <h2>Page not Found</h2>
            </div>
        </section>
    )
}

export default ErrorPage;