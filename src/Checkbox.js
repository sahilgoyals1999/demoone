import { useState } from "react";
import properties from "./data/properties";

const Checkbox = () => {
    const [selectedItems, setItems] = useState(["2BHK"])
    return (
        <div>
            {
                properties.map(x => {
                return (
                    <div class="form-check">
                        <input 
                        value={x.occupancy}
                        checked={selectedItems.indexOf(x.occupancy) > -1}
                        class="form-check-input" 
                        type="checkbox" 
                        onChange={e => {
                            let updatedList = [...selectedItems];
                            if(e.target.checked) {
                                updatedList = [...selectedItems, e.target.value];
                            }
                            else {
                                let index = selectedItems.indexOf(e.target.value);
                                updatedList.splice(index, 1);
                            }
                            setItems(updatedList);
                        }}
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                            {x.occupancy}
                        </label>
                    </div>
                )
                })
            }
            <p>{JSON.stringify(selectedItems)}</p>
        </div>
    )
}

export default Checkbox;