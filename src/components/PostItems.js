


import { Link } from "react-router-dom";
import { PostAuthor } from "./index";

const PostItems = ({ postID, thumbnail, category, title, description, authorID, createdAt }) => {

    const shortDescription = description.length > 120 ? description.substr(0, 120) + "..." : description;

    const shortTitle = title.length > 30 ? title.substr(0, 35) + "..." : title;

    return (
        <article className="post">
            <div className="post__thumbnail">
                <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />
            </div>
            <div className="post__content">
                <Link to={`posts/${postID}`} >
                    <h3>{shortTitle}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
                <div className="post__footer">
                    <PostAuthor authorID={authorID} createdAt={createdAt} />
                    <Link to={`/posts/categories/${category}`} className="btn category">{category}
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default PostItems;