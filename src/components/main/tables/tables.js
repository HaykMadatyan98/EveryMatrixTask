import './tables.css';
import {HEADER_IMAGES} from "../../picturelinks";

function Table({data, header}) {
    const row = (elem) => (
        <tr key={elem.ID}>
            <th>{elem.ID}</th>
            <th>{elem.UserName}</th>
            <th>{elem.Profit}</th>
            <th>{elem.Commission}</th>
            <th><img src={HEADER_IMAGES[2]} alt={"more"} /></th>
        </tr>
    )

    return (
        <div className="Table">
            <span>{header}</span>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Profit($)</th>
                        <th>Commission($)</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(elem => row(elem))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
