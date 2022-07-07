import { useState } from "react";
import properties from "./data/properties";

const RadioButton = () => {
    const [selectedItem, setItem] = useState("2BHK")
    return (
        <div>
            {
                properties.map(x => {
                return (
                    <div class="form-check">
                        <input 
                        value={x.occupancy}
                        checked={selectedItem.indexOf(x.occupancy) > -1}
                        class="form-check-input" 
                        type="radio" 
                        onChange={e => {
                            setItem(e.target.value);
                        }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            {x.occupancy}
                        </label>
                    </div>
                )
                })
            }
            <p>{JSON.stringify(selectedItem)}</p>
        </div>
    )
}

export default RadioButton;