
import LoaderGif from "../utils/loader-gif.gif"


const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__image">
                <img src={LoaderGif} alt="" />
            </div>
        </div>
    )
}

export default Loader;