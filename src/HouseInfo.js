import { useContext } from "react";
import CardContext from "./context/cartContext";
import content from "./data/content";

const HouseInfo = (props) => {
    const {cardItems, setCardItems} = useContext(CardContext);
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
                <button 
                onClick={e => {
                    if(cardItems + 1 > content.length) return;
                    setCardItems(cardItems + 1)
                }}
                >Add</button>
                <button 
                onClick={e => {
                    if(cardItems - 1 < 0) return;
                    setCardItems(cardItems - 1)
                }}
                >
                Remove</button>
            </div>
        </div>
    )
}

export default HouseInfo;