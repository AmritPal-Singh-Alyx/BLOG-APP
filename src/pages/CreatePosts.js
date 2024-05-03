import { useState } from "react";
import { modules, formats, POST_CATEGORIES } from "../components/config"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";





const CreatePosts = () => {




    const [title, setTitle] = useState('');
    const [category, setCategory] = useState("Uncategorized");
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");


    return (

        <section className="create-post">
            <div className="container">
                <h2>Create Post</h2>
                <p className="form__error-message">This is an error message</p>
                <form className="form create-post__form">

                    <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} autoFocus />

                    <select name="category" value={category} onChange={e => setCategory(e.target.value)} >
                        {
                            POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
                        }
                    </select>

                    <ReactQuill modules={modules} formats={formats} value={description} onChange={setDescription} />

                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept="png, jpg, jpeg" />

                    <button type="submit" className="btn primary"> Create</button>


                </form>
            </div>
        </section>
    )
}

export default CreatePosts;