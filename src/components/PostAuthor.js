
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

// import en from "javascript-time-ago/en"
// import ru from "javascript-time-ago/ru";

// TimeAgo.addDefaultLocale(en);
// TimeAgo.addDefaultLocale(ru);

const PostAuthor = ({ createdAt, authorID }) => {

    const [author, setAuthor] = useState({});


    useEffect(() => {
        const getAuthor = async () => {
            if (!authorID) {
                console.log("Author ID is undefined");
                return;
            }
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`);
                console.log(response?.data)
                setAuthor(response?.data);
            } catch (err) {
                console.log(err);
            };
        }
        getAuthor();
    }, [])

    return (
        <Link to="/posts/users/sdfsdf" className="post__author">
            <div className="post__author-avatar">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="avatar" />
            </div>
            <div className="post__author-details">
                <h5>By: {author?.name}</h5>
                <small><ReactTimeAgo date={new Date(createdAt)} locale="en-US" /></small>
            </div>
        </Link>
    )
}

export default PostAuthor;