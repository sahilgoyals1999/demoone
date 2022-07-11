import { useContext, useState } from "react";
import CardContext from "./context/cartContext";
import ThemeContext from "./context/themeContext";
import NavLink from "./NavLink";
import ThemeButton from "./Theme";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const {cardItems, setCardItems} = useContext(CardContext);
  const {appTheme, setAppTheme} = useContext(ThemeContext);
  const [searchCity, setSearchCity] = useState("");
  let classBackground = appTheme == "Dark" ? "navbar navbar-expand-lg navbar-dark bg-dark" : "navbar navbar-expand-lg navbar-dark bg-primary";
    return (
        <nav class={classBackground}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">{props.company}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto">
                <Link to="/login">
                  <NavLink name={"Login"}/>
                </Link>
                <Link to="/register">
                  <NavLink name={"Register"}/>
                </Link>
              </ul>
              <form class="d-flex">
                <input class="form-control me-sm-2" 
                value={searchCity}
                onChange={e => {
                  setSearchCity(e.target.value);
                  props.filterFunction(e.target.value);
                }}
                type="text" 
                placeholder="Search" 
                />
                <span 
                class="badge bg-secondary"
                >
                  <p>Count: {cardItems}</p>
                </span>
              </form>
            </div>
          </div>
          <ThemeButton />
        </nav>
    )
}

export default NavBar;