


import { useState } from "react";
import { DUMMY_POSTS } from "./config";
import { PostItems } from "./index.js";
import { GiH2O } from "react-icons/gi";


const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)

    return (

        <section>


            {posts.length > 0 ? <div className="container posts__container">
                {
                    posts.map(post =>
                    (<PostItems
                        key={post.id} p
                        ostID={post.id}
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

export default Posts;