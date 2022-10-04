import './menu.css';
import {MENU_ELEMENTS, MENU_SUBELEMENTS} from "../picturelinks";

function Menu() {
    return (
        <div className="Menu">
            <div className="Menu-Element active" >
                <img src={MENU_ELEMENTS[0]} alt="bwin" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[0]} alt="alternative text" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[1]} alt="key" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[2]} alt="user" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[3]} alt="rupor" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[4]} alt="graph" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[5]} alt="graph" />
            </div>
            <div className="Menu-SubElement" >
                <img src={MENU_SUBELEMENTS[6]} alt="setting" />
            </div>
            <div className="Menu-Element" >
                <img src={MENU_ELEMENTS[1]} alt="bwin" />
            </div>
            <div className="Menu-Element" >
                <img src={MENU_ELEMENTS[2]} alt="bwin" />
            </div>
            <div className="Menu-Element" >
                <img src={MENU_ELEMENTS[3]} alt="bwin" />
            </div>
        </div>
    );
}

export default Menu;
