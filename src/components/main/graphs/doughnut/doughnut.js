import './doughnut.css';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {DOUGHNUT_GRAPH_DATA} from "../../../data";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutGraph() {
    const values = DOUGHNUT_GRAPH_DATA.map(elem => elem.value)
    const colors = DOUGHNUT_GRAPH_DATA.map(elem => elem.color)

    const data = {
        datasets: [
            {
                data: [...values],
                backgroundColor: [...colors]
            },
        ],
    };

    const infoJSX = (name, value, color) => <div className={'infoJSX'}>
                            <div style={{'border' : `1px solid ${color}`}}></div>
                            <div>
                                <span>{name}</span>
                                <span>{value}</span>
                            </div>
                        </div>

    return (
        <div className="Doughnut-container">
            <span>Active Medias</span>
            <div className={"doughnut"}>
                <Doughnut data={data} />
            </div>
            <div className="infoJSX-container">
                <div className={'CTR'}>
                    <div>
                        <span>CTR</span>
                        <span>25%</span>
                    </div>
                </div>
                {DOUGHNUT_GRAPH_DATA.map(elem => infoJSX(elem.name, elem.value, elem.color))}
            </div>
        </div>
    )
}

export default DoughnutGraph;
