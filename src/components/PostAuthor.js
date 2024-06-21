import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json"
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addDefaultLocale(ru);

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
                setAuthor(response?.data);
            } catch (error) {
                console.log(error);
            };
        }
        getAuthor();
    }, [authorID]);

    // Check if createdAt is a valid date
    const createdAtDate = new Date(createdAt);
    if (isNaN(createdAtDate.getTime())) {
        console.error("Invalid createdAt value:", createdAt);
    }

    return (
        <Link to={`posts/users/${authorID}`} className="post__author">
            <div className="post__author-avatar">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="avatar" />
            </div>
            <div className="post__author-details">
                <h5>By: {author?.name}</h5>
                <small>
                    {!isNaN(createdAtDate.getTime()) ? (
                        <ReactTimeAgo date={createdAtDate} locale="en-US" />
                    ) : (
                        <span>Invalid date</span>
                    )}
                </small>
            </div>
        </Link>
    )
}

export default PostAuthor;
