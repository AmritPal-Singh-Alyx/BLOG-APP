import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";



const DeletePost = () => {

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
        <div><h1>DeletePost</h1></div>
    )
}

export default DeletePost;