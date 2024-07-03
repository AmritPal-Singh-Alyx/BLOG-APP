
import { useParams } from "react-router-dom";
import { PostItems } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";


const CategoryPosts = () => {

    const { category } = useParams();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/categories/${category}`);
                setPosts(response?.data);
            } catch (error) {
                console.log(error);
            }
            setIsLoading(false);
        }

        fetchPosts();
    }, [category])



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

export default CategoryPosts;