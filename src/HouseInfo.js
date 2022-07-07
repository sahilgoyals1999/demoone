const HouseInfo = (props) => {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
            <img className="card-img w-100 h-100"  src={props.imageUrl} alt="..." />
                <h3 className="card-header">{props.size}</h3>
                <div className="card-body">
                </div>
                <div className="card-body">
                    <p className="card-text">{props.loc}</p>
                    <p className="card-text">{props.price}</p>
                </div>
                <button onClick={e => props.addHome()}>Add</button>
                <button onClick={e => props.removeHome()}>Remove</button>
            </div>
        </div>
    )
}

export default HouseInfo;