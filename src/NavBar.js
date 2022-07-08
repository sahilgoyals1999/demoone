import { useContext, useState } from "react";
import ThemeContext from "./context/themeContext";
import NavLink from "./NavLink";
import ThemeButton from "./Theme";

const NavBar = (props) => {
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
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home
                    <span class="visually-hidden">(current)</span>
                  </a>
                </li>
                <NavLink name={"Features"}/>
                <NavLink name={"Pricing"}/>
                <NavLink name={"About"}/>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                  </div>
                </li>
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
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                <span class="badge bg-secondary">Count: {props.cnt}</span>
              </form>
            </div>
          </div>
          <ThemeButton />
        </nav>
    )
}

export default NavBar;