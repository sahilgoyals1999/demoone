import HouseInfo from "./HouseInfo";
import NavBar from "./NavBar";
import content from "./data/content";
import Search from "./Seach";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import Dropdown from "./Dropdown";
import { useState } from "react";
import Form from "./Form";
import ThemeContext from "./context/themeContext";
import Layout from "./Layout";

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

  const [appTheme, setAppTheme] = useState('Light');
  const value = {appTheme, setAppTheme};

  return (
    <div className="container">
      <ThemeContext.Provider value={value}>
        <Layout />
      {/* <NavBar
      company={"Housing.com"}
      filterFunction={filterFunction}
      cnt={cnt}
      />
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
        </div> */}
        </ThemeContext.Provider>
    </div>
  )
}

export default App;