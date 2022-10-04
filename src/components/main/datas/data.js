import './data.css';

function Data({data}) {
    return (
        <div className={'Data-Element'}>
            <img src={data.img} alt={''} />
            <span style={{'color': data.color}}>{data.value}</span>
            <div>
                <img src={data.img} alt={'data-image'} />
                <span>{data.name}</span>
            </div>
        </div>
    );
}

export default Data;
