import Photos from "../../atoms/photo profile/Photos";
import Nav from "../../atoms/nav/Nav";
import "./float-left.style.css";

const FloatLeft = () => {
    return(
        <div className="float-left sticky-top">
            <Photos />
            <Nav />
        </div>
    );
}

export default FloatLeft;