import './header.css';
import {HEADER_IMAGES} from "../../picturelinks";

function Header() {
    return (
        <div className="Header">
            <div className={"header-icon"}>
                <img src={HEADER_IMAGES[2]} alt={"eng"}/>
            </div>
            <div className={"lang"}>
                <img src={HEADER_IMAGES[0]} alt={"eng"}/>
                <span>EN</span>
            </div>
            <div className={"userInfo"}>
                <img src={HEADER_IMAGES[1]} alt={"photo"}/>
                <div>
                    <span>Hello, Max!</span>
                    <span>Last login: Thu Mar 20 2014</span>
                </div>
                <span>V</span>
            </div>
        </div>
    );
}

export default Header;
