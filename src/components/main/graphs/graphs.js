import './graphs.css';
import LineGraph from "./linegraph/linegraph";
import Doughnut from "./doughnut/doughnut";

function Graphs() {
    return (
        <div className="Graphs">
            <LineGraph />
            <Doughnut />
        </div>
    );
}

export default Graphs;
