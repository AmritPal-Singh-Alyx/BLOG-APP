
import { DUMMY_POSTS } from '../components/config';
import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';



const Dashboard = () => {

    const [posts, setPost] = useState(DUMMY_POSTS);
    const { currentUser } = useContext(UserContext);
    const navigate = useNavigate()

    const token = currentUser?.token;

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    return (
        <section className='dashboard'>
            {
                posts.length ? <div className='container dashboard__container'>
                    {
                        posts.map(post => {
                            return <article key={post.id} className='dashboard__post' >

                                <div className='dashboard__post-info'>
                                    <div className='dashboard__post-thumbnail'>
                                        <img src={post.thumbnail} alt="" />
                                    </div>
                                    <h5>{post.title}</h5>
                                </div>

                                <div className='dashboard__post-actions'>
                                    <Link to={`/posts/${post.id}`} className="btn sm">View</Link>
                                    <Link to={`/posts/${post.id}/edit`} className="btn primary sm">Edit</Link>
                                    <Link to={`/posts/${post.id}/delete`} className=" btn danger sm">Delete</Link>
                                </div>

                            </article>
                        })
                    }

                </div>
                    : <h2 className='center'>You have not posts yet!</h2>
            }
        </section>
    )
}

export default Dashboard;