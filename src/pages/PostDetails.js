import { PostAuthor } from "../components/index";
import { Link } from "react-router-dom";

import Thumbnail from "../utils/thumbnail5.jpg";
import "../styles/home.css"



const PostDetails = () => {

    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link to={"/posts/werwer/edit"} className="btn sm primary">Edit</Link>
                        <Link to={"/posts/werwer/delete"} className="btn sm danger">Delete</Link>
                    </div>
                </div>
                <h1>This is the post Title</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="thumbnail" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vel minima numquam at voluptas nesciunt, nemo repellat suscipit non harum ut, architecto et? Vero enim eaque temporibus eius minus maiores fugit corrupti ducimus qui, ipsum ea eligendi officiis, adipisci perspiciatis.
                </p>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto minus libero veniam numquam explicabo, inventore reprehenderit distinctio, nihil deserunt magni ipsam illum adipisci. Consequuntur, quos nihil possimus dolor dignissimos voluptates tempora cum, laboriosam, excepturi eos assumenda? Tenetur, quis porro incidunt officiis enim atque, amet a, maiores exercitationem provident soluta ad sint deleniti et perferendis dolores!
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione distinctio facilis odio ex consequatur asperiores beatae a suscipit fugiat? Quisquam natus rem id odio, consequuntur aspernatur fugiat earum totam cum voluptatibus velit, deserunt officiis aliquam, cumque quas eligendi atque corrupti. Laborum fugit amet excepturi, harum ipsum deserunt minima ipsa voluptatum vel, suscipit vitae unde labore sit molestias quisquam omnis impedit. Vitae, similique! A tempore, aliquam, quisquam quia quas nihil optio quasi nostrum consectetur non, inventore soluta dolores dolore quidem deleniti eaque aliquid eveniet. Sapiente, ipsa possimus exercitationem voluptates velit totam ea, ab deserunt, laudantium sint eius. Eos odio delectus eveniet quod magnam nihil fuga, iste nesciunt nobis aliquid! Commodi, quasi praesentium?
                </p>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos numquam quam est tempore totam voluptatibus inventore perferendis amet nulla eveniet!
                </p>
            </div>
        </section>
    )
}

export default PostDetails;