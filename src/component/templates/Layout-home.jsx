import FloatLeft from "../molecules/float left/Float-left";
import FloatRight from "../molecules/float right/Float-right";
import "./layout.style.css";

const Layout = () => {
    return(
        <div className="container-fluid">
            <div className="layout row">
                <div className="left-side col-lg-3 p-0">
                    <FloatLeft />
                </div>
                <div className="right-side col p-2">
                    <FloatRight />
                </div>
            </div>
        </div>
    );
}

export default Layout;