import './main.css';
import Header from "./header/header";
import Data from "./datas/data";
import Graphs from "./graphs/graphs";
import Table from "./tables/tables";
import {MENU_ELEMENTS} from "../picturelinks";
import {GLOBAL_DATA, TABLE_DATA} from "../data";

function Main() {
    return (
        <div className="Main">
            <Header />
            <div className={"Dashboard"}>
                <span>Dashboard</span>
                <div>
                    <img src={MENU_ELEMENTS[1]} alt={"heart"} />
                    <span>ADD THIS PAGE TO FAVORITES</span>
                </div>
            </div>
            <div className={"Data"}>
                <Data data={GLOBAL_DATA[0]}/>
                <Data data={GLOBAL_DATA[1]}/>
                <Data data={GLOBAL_DATA[2]}/>
                <Data data={GLOBAL_DATA[3]}/>
            </div>
            <Graphs />
            <div className={"Tables"}>
                <Table data={TABLE_DATA} header={'Top Affiliates'}/>
                <Table data={TABLE_DATA} header={'Signups'}/>
                <Table data={TABLE_DATA} header={'Pending Commissions'}/>
            </div>
        </div>
    );
}

export default Main;
