import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


import { UserContext } from "../context/UserContext";
import axios from "axios";




const Login = () => {

    const formData = {
        name: "",
        email: "",
    }
    const [userData, setUserData] = useState(formData);
    const [error, setError] = useState("");
    const navigate = useNavigate()
    const { setCurrentUser } = useContext(UserContext);

    const changeInputHandler = (e) => {
        setUserData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        })
    }

    const loginUser = async (e) => {
        e.preventDefault();
        setError('');

        try {

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
            const user = await response.data;
            setCurrentUser(user)
            navigate("/")
        } catch (err) {
            setError(err.response?.data?.message);
        }
    }

    return (

        <section className="register">
            <div className="container">
                <h2>Sign In</h2>
                <form className="form register__form" onSubmit={loginUser}>
                    {error && <p className="form__error-message">{error}</p>}

                    <input type="text" name="email" placeholder="Email" value={userData.email} onChange={changeInputHandler} autoFocus />

                    <input type="password" name="password" placeholder="Password" value={userData.password} onChange={changeInputHandler} />

                    <button type="submit" className="btn primary">Login</button>
                </form>
                <small> Don't have an account? <Link to="/register">sign up</Link></small>
            </div>
        </section>
    )
}

export default Login;