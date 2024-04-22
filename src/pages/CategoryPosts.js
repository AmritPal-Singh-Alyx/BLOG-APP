
import { PostItems } from "../components";
import { useState } from "react";
import { DUMMY_POSTS } from "../components/config";

const CategoryPosts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className="posts">


            {posts.length > 0 ? <div className="container posts__container">
                {
                    posts.map(post =>
                    (<PostItems
                        key={post.id}
                        postID={post.id}
                        thumbnail={post.thumbnail}
                        category={post.category}
                        title={post.title}
                        description={post.desc}
                        authorID={post.authorID}
                    />))
                }
            </div> : <h2 className="center">No Posts Found </h2>}
        </section>
    )
}

export default CategoryPosts;