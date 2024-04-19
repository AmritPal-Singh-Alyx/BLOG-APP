


import { useState } from "react";
import { DUMMY_POSTS } from "./config";
import { PostItems } from "./index.js";


const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)

    return (

        <section>
            <div className="container posts__container">
                {
                    posts.map(post => (<PostItems key={post.id} postID={post.id} thumbnail={post.thumbnail} category={post.category} title={post.title} description={post.desc} authorID={post.authorID} />))
                }
            </div>
        </section>
    )
}

export default Posts;