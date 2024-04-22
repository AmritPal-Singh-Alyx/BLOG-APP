import { useState } from "react";
import { Link } from "react-router-dom";





const Login = () => {

    const formData = {
        name: "",
        email: "",
    }
    const [userData, setUserData] = useState(formData);

    const changeInputHandler = (e) => {
        setUserData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    return (

        <section className="register">
            <div className="container">
                <h2>Sign In</h2>
                <form className="form register__form">
                    <p className="form__error-message">This is an error message</p>

                    <input type="text" name="email" placeholder="Email" value={userData.email} onChange={changeInputHandler} />

                    <input type="password" name="password" placeholder="Password" value={userData.password} onChange={changeInputHandler} />

                    <button type="submit" className="btn primary">Login</button>
                </form>
                <small> Don't have an account? <Link to="/register">sign up</Link></small>
            </div>
        </section>
    )
}

export default Login;