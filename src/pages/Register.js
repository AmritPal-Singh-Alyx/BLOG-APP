import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const formData = {
        name: "",
        email: "",
        password: "",
        password2: ""
    };

    const [userData, setUserData] = useState(formData);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const changeInputHandler = (e) => {
        setUserData(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        });
    };

    const registerUser = async (e) => {
        e.preventDefault();
        setError('');

        try {
            console.log("Registering user with data:", userData);
            console.log("Base URL:", process.env.REACT_APP_BASE_URL);

            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData);
            const newUser = response.data;
            console.log("New user:", newUser);

            if (!newUser) {
                setError("Couldn't register user. Please try again.");
                return;
            }

            navigate("/login");
        } catch (err) {
            console.error("Registration error:", err);
            setError(err.response?.data?.message);
        }
    };

    return (
        <section className="register">
            <div className="container">
                <h2>Sign Up</h2>
                <form className="form register__form" onSubmit={registerUser}>
                    {error && <p className="form__error-message">{error}</p>}

                    <input type="text" name="name" placeholder="Full name" value={userData.name} onChange={changeInputHandler} autoFocus />

                    <input type="text" name="email" placeholder="Email" value={userData.email} onChange={changeInputHandler} />

                    <input type="password" name="password" placeholder="Password" value={userData.password} onChange={changeInputHandler} autoComplete="new-password" />

                    <input type="password" name="password2" placeholder="Confirm Password" value={userData.password2} onChange={changeInputHandler} autoComplete="new-password" />

                    <button type="submit" className="btn primary">Register</button>
                </form>
                <small> Already have an account? <Link to="/login">sign in</Link></small>
            </div>
        </section>
    );
};

export default Register;
