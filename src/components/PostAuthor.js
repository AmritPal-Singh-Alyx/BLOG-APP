
import { Link } from "react-router-dom";
import Avatar from "../utils/avatar.jpg"


const PostAuthor = () => {

    return (
        <Link to="/posts/users/sdfsdf" className="post__author">
            <div className="post__author-avatar">
                <img src={Avatar} alt="avatar" />
            </div>
            <div className="post__author-details">
                <h5>By:AmritPal Singh</h5>
                <small>Just now</small>
            </div>
        </Link>
    )
}

export default PostAuthor;