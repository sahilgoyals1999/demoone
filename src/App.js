import HouseInfo from "./HouseInfo";
import NavBar from "./NavBar";
import content from "./data/content";
import Search from "./Seach";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [display, setDisplay] = useState(content);

  const filterFunction = (searchCity) => {
    searchCity = searchCity.toLowerCase();
    if(searchCity === "") {
      setDisplay(content);
      return;
    }
    let newDisplay = [];
    content.forEach(x => {
      if(x.loc.toLowerCase().includes(searchCity)) {
        newDisplay.push(x);
      }
    });
    setDisplay(newDisplay);
  }

  const addHome = (e) => {
    if(cnt === content.length) return;
    setCnt(cnt + 1);
  }
  const removeHome = (e) => {
    if(cnt === 0) return;
    setCnt(cnt - 1);
  }
  return (
    <div className="container">
      <NavBar
      company={"Housing.com"}
      filterFunction={filterFunction}
      cnt={cnt}
      />
      <Form />
      {/* <Search />
      <hr/>
      <Checkbox />
      <hr/>
      <RadioButton />
      <hr />
      <Dropdown />
      <hr /> */}
      <div class="col-10">
        <div className="d-flex flex-wrap align-items-center">
              {display.map((item, ind) => { 
                return <HouseInfo 
                key={ind}
                imageUrl={item.imageUrl}
                size={item.size}
                price={item.price}
                loc={item.loc}
                addHome={addHome}
                removeHome={removeHome}
                />
              })}
            </div>
        </div>
    </div>
  )
}

export default App;