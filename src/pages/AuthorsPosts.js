import { DUMMY_POSTS } from "../components/config";
import { PostItems } from "../components/index";
import { useState } from "react"

const AuthorsPost = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS);

    return (
        <section className="posts">


            {posts.length > 0 ? <div className="container posts__container">
                {
                    posts.map(({ _id: id, thumbnail, category, title, description, creator, createdAt }) =>
                    (<PostItems
                        key={id}
                        postID={id}
                        thumbnail={thumbnail}
                        category={category}
                        title={title}
                        description={description}
                        authorID={creator}
                    />))
                }
            </div> : <h2 className="center">No Posts Found </h2>}
        </section>
    )
}

export default AuthorsPost;