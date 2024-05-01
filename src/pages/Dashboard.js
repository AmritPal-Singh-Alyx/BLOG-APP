
import { DUMMY_POSTS } from '../components/config';
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Dashboard = () => {

    const [posts, setPost] = useState(DUMMY_POSTS);


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