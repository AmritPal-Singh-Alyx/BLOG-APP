import { useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const DeletePost = ({ postId: id }) => {
    const { currentUser } = useContext(UserContext);
    const token = currentUser?.token;
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect to login page for any user who isn't logged in
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    const removePost = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, {
                withCredentials: true,
                headers: { Authorization: `Bearer ${token}` }
            });
            if (response.status === 200) {
                if (location.pathname === `/myposts/${currentUser.id}`) {
                    navigate(0); // Reloads the current page
                } else {
                    navigate('/');
                }
            }
        } catch (error) {
            console.log("Couldn't delete the post");
        }
    };

    return (
        <Link className="btn sm danger" onClick={removePost}>Delete</Link>
    );
};

export default DeletePost;
