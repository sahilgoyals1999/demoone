import HouseInfo from "./HouseInfo";
import NavBar from "./NavBar";
import content from "./data/content";
import { useState } from "react";
import ThemeContext from "./context/themeContext";
import Layout from "./Layout";
import CardContext from "./context/cartContext";
import Cards from "./Cards";

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

  // const addHome = (e) => {
  //   if(cnt === content.length) return;
  //   setCnt(cnt + 1);
  // }
  // const removeHome = (e) => {
  //   if(cnt === 0) return;
  //   setCnt(cnt - 1);
  // }

  const [appTheme, setAppTheme] = useState('Light');
  const value = {appTheme, setAppTheme};
  const [cardItems, setCardItems] = useState(0);
  const count = {cardItems, setCardItems};

  return (
    <div className="container">
      <ThemeContext.Provider value={value}>
        <CardContext.Provider value={count}>
          <Layout>
            <NavBar 
              company={"Housing.com"} 
              filterFunction={filterFunction}
              />
            <Cards display={display}/>
            </Layout>
        </CardContext.Provider>
        </ThemeContext.Provider>
    </div>
  )
}

export default App;