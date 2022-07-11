import { useState } from "react";
import properties from "./data/properties";

const Dropdown = () => {
    const [selectedItem, setItem] = useState("2BHK")
    return (
        <div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  button
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                    properties.map(x => {
                    return (
                        <li class="form-check">
                            <input 
                            name="radio"
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
                        </li>
                    )})
                }
                </ul>
            </div>
            <p>{JSON.stringify(selectedItem)}</p>
        </div>
    )
}

export default Dropdown;