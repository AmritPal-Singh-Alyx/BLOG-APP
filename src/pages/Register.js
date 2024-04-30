import { useState } from "react";
import { Link } from "react-router-dom";





const Register = () => {

    const formData = {
        name: "",
        email: "",
        password: "",
        password2: ""
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
                <h2>Sign Up</h2>
                <form className="form register__form">
                    <p className="form__error-message">This is an error message</p>

                    <input type="text" name="name" placeholder="Full name" value={userData.name} onChange={changeInputHandler} autoFocus />

                    <input type="text" name="email" placeholder="Email" value={userData.email} onChange={changeInputHandler} />

                    <input type="password" name="password" placeholder="Password" value={userData.password} onChange={changeInputHandler} />

                    <input type="password" name="password2" placeholder="Confirm Password" value={userData.password2} onChange={changeInputHandler} />

                    <button type="submit" className="btn primary">Register</button>
                </form>
                <small> Already have an account? <Link to="/login">sign in</Link></small>
            </div>
        </section>
    )
}

export default Register;