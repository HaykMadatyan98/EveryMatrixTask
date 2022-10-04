import './linegraph.css';
import { Line } from 'react-chartjs-2';
import {LINE_GRAPH_DATA} from "../../../data";
import {ArcElement, Chart as ChartJS, Legend, Tooltip, CategoryScale, LinearScale, PointElement, LineElement} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

function DoughnutGraph() {
    const values = LINE_GRAPH_DATA.map(elem => [elem.value])
    const colors = LINE_GRAPH_DATA.map(elem => elem.color)
    const names = LINE_GRAPH_DATA.map(elem => elem.name)

    console.log(values)

    for (let i = 1; i < 8; i++) {
        values[0].push(Math.sin(values[0][0] / 60 + i) * 60);
        values[1].push(Math.sin(values[1][0] / 60 + i) * 60);
        values[2].push(Math.sin(values[2][0] / 60 + i) * 60);
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    };

    const data = {
        labels: ['', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: names[0],
                data: values[0],
                backgroundColor: colors[0],
                borderColor: colors[0]
            },
            {
                label: names[1],
                data: values[1],
                backgroundColor: colors[1],
                borderColor: colors[1]
            },
            {
                label: names[2],
                data: values[2],
                backgroundColor: colors[2],
                borderColor: colors[2]
            }
        ]
    };

    return (
        <div className="linear-container">
            <span>Media Stats</span>
            <div className={"linear"}>
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default DoughnutGraph;
