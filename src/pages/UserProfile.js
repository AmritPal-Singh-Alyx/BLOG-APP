
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../utils/avatar.jpg"
import { FaCheck, FaEdit } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";



const UserProfile = () => {

    const [avatar, setAvatar] = useState(Avatar)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");

    const { currentUser } = useContext(UserContext);
    const token = currentUser?.token;
    const navigate = useNavigate();

    //  redirect to login page for any user who isn't logged in
    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    return (

        <section className="profile">
            <div className="container profile__container">

                <Link to="/mypost/adfa" className="btn">My posts</Link>
                <div className="profile__details">

                    <div className="avatar__wrapper">
                        <div className="profile__avatar">
                            <img src={avatar} alt="" />
                        </div>
                        <form className="avatar__form">
                            <input type="file" name="avatar" id="avatar" onChange={(e) => setAvatar(e.target.files[0])} accept="png, jpg, jpeg" />
                            <label htmlFor="avatar"><FaEdit /></label>
                        </form>
                        <button className="profile__avatar-btn"><FaCheck /></button>
                    </div>
                    <h1>AmritPal Singh</h1>


                    {/* Form to update the user details */}

                    <form className="form profile__form">
                        <p className="form__error-message">This is an error message</p>

                        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />

                        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

                        <input type="password" placeholder="Current Password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />

                        <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />

                        <input type="password" placeholder="Confirm New Password" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />

                        <button type="submit" className="btn primary">update details</button>
                    </form>

                </div>

            </div>
        </section>
    )
}

export default UserProfile;