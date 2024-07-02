


import { useEffect, useState } from "react";
import { DUMMY_POSTS } from "./config";
import { PostItems } from "./index.js";
import Loader from "../components/Loader.js"
import axios from "axios"



const Posts = () => {

    const [posts, setPosts] = useState(DUMMY_POSTS)
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
                setPosts(response?.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        }

        fetchPosts();

    }, [])

    if (isLoading) {
        return <Loader />
    }

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
                        createdAt={createdAt}
                    />))
                }
            </div> : <h2 className="center">No Posts Found </h2>}
        </section>
    )
}

export default Posts;